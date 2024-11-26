
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
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSpeech } from '@coreui/icons';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';






function GroupsmsFileCustom() {
  const groupID = Cookies.get('groupId');
  const [organisationfetch, setOrganisationfetch] = useState([]);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [fileData, setFileData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [parsedRows, setParsedRows] = useState([]);
  const [selectedPhoneColumn, setSelectedPhoneColumn] = useState(''); // Column for phone numbers
  const [textareaData, setTextareaData] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData.length) {
          const extractedHeaders = jsonData[0];
          const extractedRows = jsonData.slice(1).map((row) =>
            extractedHeaders.reduce((obj, header, index) => {
              obj[header] = row[index] || '';
              return obj;
            }, {})
          );

          setHeaders(extractedHeaders);
          setFileData(jsonData.slice(1));
          setParsedRows(extractedRows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleColumnSelect = (columnName) => {
    if (columnName) {
      const placeholder = `{${columnName}}`;
      if (!textareaData.includes(placeholder)) {
        setTextareaData((prev) => `${prev}${prev ? ' ' : ''}${placeholder}`.trim());
      }
    }
  };

  const handlePhoneColumnSelect = (columnName) => {
    setSelectedPhoneColumn(columnName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code || !selectedPhoneColumn || !textareaData) {
      Swal.fire({
        title: 'Error',
        text: 'Please select a sender ID, phone column, and compose a message.',
        icon: 'error',
      });
      return;
    }

    const messages = parsedRows
      .map((row) => {
        const phoneNumber = row[selectedPhoneColumn];
        if (!phoneNumber) return null;

        let customizedMessage = textareaData;
        headers.forEach((header) => {
          const placeholder = `{${header}}`;
          customizedMessage = customizedMessage.replace(
            new RegExp(placeholder, 'g'),
            row[header] || ''
          );
        });

        return { phoneNumber, message: customizedMessage };
      })
      .filter(Boolean); // Remove null entries for rows without phone numbers

    if (messages.length === 0) {
      Swal.fire({
        title: 'Error',
        text: 'No valid phone numbers found.',
        icon: 'error',
      });
      return;
    }

    const payload = {
      code:code,
      phoneNumber : messages.map((mess)=>mess.phoneNumber),
      message :  messages.map((mess)=>mess.message),
    };

    console.log(payload)
   
   

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}group-sms-fileCustom`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.text()

      console.log(result)
      if(result == "Successfully processed all messages."){
        Swal.fire({
          title: 'Success',
          text: 'Messages sent successfully!',
          icon: 'success',
        });
      }else{
        Swal.fire({
          title: 'Error',
          text: 'Failed to send messages.',
          icon: 'error',
        });
      }

      if (response.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Messages sent successfully!',
          icon: 'success',
        });
      } else {
        const error = await response.json();
        Swal.fire({
          title: 'Error',
          text: error.message || 'Failed to send messages.',
          icon: 'error',
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while sending the messages.',
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
      .then((res) => res.json())
      .then((data) => setOrganisationfetch(data))
      .catch((err) => console.error('Fetch error:', err));
  }, [groupID]);

  return (
    <>
      <CRow className="justify-content-md-center">
        <CCol xs={9}>
          <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
            <CCardBody>
              <CCardTitle>
                <CAlert color="primary" variant="solid" className="d-flex align-items-center" xs={10}>
                  <CIcon icon={cilSpeech} className="flex-shrink-0 me-2" width={34} height={34} />
                  <div>
                    <h3>Send SMS</h3>
                  </div>
                </CAlert>
              </CCardTitle>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="senderIdSelect">Select Sender ID</CFormLabel>
                  <CFormSelect
                    id="senderIdSelect"
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
                    onChange={handleFileUpload}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  />
                </div>

                {headers.length > 0 && (
                  <div className="mb-3">
                    <CFormLabel>Select a Column for Phone Numbers</CFormLabel>
                    <CFormSelect
                      id="phoneColumnSelect"
                      value={selectedPhoneColumn}
                      onChange={(e) => handlePhoneColumnSelect(e.target.value)}
                      style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                    >
                      <option value="">Select a Column</option>
                      {headers.map((header, index) => (
                        <option key={index} value={header}>
                          {header}
                        </option>
                      ))}
                    </CFormSelect>
                  </div>
                )}

                {headers.length > 0 && (
                  <div className="mb-3">
                    <CFormLabel>Select Columns to Include in the Message</CFormLabel>
                    <div className="d-flex flex-wrap gap-2">
                      {headers.map((header, index) => (
                        <CButton
                          key={index}
                          color="primary"
                          onClick={() => handleColumnSelect(header)}
                          style={{ minWidth: '120px' }}
                        >
                          {header}
                        </CButton>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-3">
                  <CFormLabel htmlFor="messageInput">Message</CFormLabel>
                  <CFormTextarea
                    id="messageInput"
                    rows={6}
                    value={textareaData}
                    onChange={(e) => setTextareaData(e.target.value)}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  />
                </div>

                <CButton color="primary" type="submit">
                  SUBMIT
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default GroupsmsFileCustom;
