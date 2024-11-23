import React, { useEffect, useState } from 'react';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilFile } from '@coreui/icons';
import Cookies from 'js-cookie';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2'

function GroupsSmsFile() {
  const [error, setError] = useState('');
  const [organisationfetch, setOrganisationfetch] = useState([]);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const groupID = Cookies.get('groupId');
  

  const isExcelFile = (file) => {
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
    return validTypes.includes(file.type);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !isExcelFile(file)) {
      setError('Only Excel files (.xls, .xlsx) are allowed.');
      return;
    }
    setError('');

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const numbers = jsonData
          .flat()
          .filter((cell) => typeof cell === 'number' || /^\d+$/.test(cell));
        setPhoneNumbers(numbers);
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!code || !message || phoneNumbers.length === 0) {
      setError('Please fill all fields and upload a valid file.');
      return;
    }
  
    // Convert the phoneNumbers array into a comma-separated string
    const phoneNumbersString = phoneNumbers.join(',');
  
    const payload = {
      code,
      phoneNumber: phoneNumbersString, // Send as a string
      message,
    };
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}group-messagein-file`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.text();
      Swal.fire({
        title: result,
        text: "Message Sent",
        icon: "success"
      });
      console.log(result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  

  useEffect(() => {
    const fetchOrganisationData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`);
        const data = await response.json();
        setOrganisationfetch(data);
      } catch (error) {
        console.error('Error fetching organisation data:', error);
      }
    };
    fetchOrganisationData();
  }, [groupID]);

  return (
    <>
      <CRow className="justify-content-md-center">
        <CCol xs={10}>
          <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
            <CCardBody>
              <CCardTitle>
                <CAlert color="primary" variant="solid" className="d-flex align-items-center" xs={10}>
                  <CIcon icon={cilFile} className="flex-shrink-0 me-2" width={34} height={34} />
                  <div>
                    <h3>Send Group SMS from File</h3>
                  </div>
                </CAlert>
              </CCardTitle>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="senderId">Select Sender ID</CFormLabel>
                  <CFormSelect
                    id="senderId"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  >
                    <option value="">Select Sender ID</option>
                    {organisationfetch.map((data, index) => (
                      <option key={index} value={data.org_Code}>
                        {data.url}
                      </option>
                    ))}
                  </CFormSelect>
                </div>
                <div className="mb-3">
                  <CFormInput
                    type="file"
                    id="formFile"
                    label="Upload Excel File"
                    onChange={handleFileChange}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  />
                </div>
                {error && <CAlert color="danger">{error}</CAlert>}
                <div className="mb-3">
                  <CFormTextarea
                    id="textMessage"
                    label="Text Message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  />
                </div>
                <CButton type="submit" color="primary">Submit</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  );
}

export default GroupsSmsFile;
