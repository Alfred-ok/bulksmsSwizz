import { CAlert, CButton, CCard, CCardBody, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import CIcon from '@coreui/icons-react';
import { cilSpeech } from '@coreui/icons';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

function GroupsmsFileCustom() {
  const groupID = Cookies.get('groupId');
  const [organisationfetch, setOrganisationfetch] = useState([]);
  const [code, setCode] = useState();
  const [contact, setContact] = useState();
  const [message, setMessage] = useState();
  const [fileData, setFileData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [parsedRows, setParsedRows] = useState([]); // To hold extracted data
  const [textareaData, setTextareaData] = useState(''); // For textarea content

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
              obj[header] = row[index] || ''; // Map headers to row values
              return obj;
            }, {})
          );

          setHeaders(extractedHeaders);
          setFileData(jsonData.slice(1));
          setParsedRows(extractedRows); // Parsed rows with headers as keys
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleColumnButtonClick = (columnName) => {
    // Extract data for the specific column
    const columnData = parsedRows.map((row) => row[columnName]).join('\n');
    const newText = `${textareaData}\n${columnData}`.trim(); // Append to existing textarea content
    setTextareaData(newText);
  };

  const handleTextareaChange = (e) => {
    setTextareaData(e.target.value); // Allow manual text entry
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Submitted Text',
      text: textareaData,
      icon: 'success',
    });
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
                    <h3>Send Sms</h3>
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
                    <option value="">Select Sender Id</option>
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
                    <h5>Columns:</h5>
                    {headers.map((header) => (
                      <CButton
                        key={header}
                        color="primary"
                        className="m-1"
                        onClick={() => handleColumnButtonClick(header)}
                      >
                        {header}
                      </CButton>
                    ))}
                  </div>
                )}
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Message with Column Data</CFormLabel>
                  <CFormTextarea
                    id="exampleFormControlTextarea1"
                    rows={6}
                    value={textareaData}
                    onChange={handleTextareaChange}
                    style={{ borderColor: 'rgba(71, 71, 212,0.6)' }}
                  ></CFormTextarea>
                </div>
                <div className="col-auto">
                  <CButton color="primary" type="submit" className="mb-3">
                    SUBMIT
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default GroupsmsFileCustom;
