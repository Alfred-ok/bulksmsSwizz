import React, { useEffect, useRef, useState } from 'react';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CFormLabel,
  CFormSelect,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash, cilCloudUpload, cilFile } from '@coreui/icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function uploadContacts() {
  const [files, setFiles] = useState([]);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');
  
  const [membersGroupId, setMembersGroupId] = useState()
  const[organisationfetch, setOrganisationfetch] = useState([]);

  const inputRef = useRef();
  const groupID = Cookies.get('groupId');

  const isExcelFile = (file) => {
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];
    const validExtensions = ['.xls', '.xlsx'];
    return (
      validTypes.includes(file.type) ||
      validExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(isExcelFile);
    const invalidFiles = droppedFiles.filter((file) => !isExcelFile(file));

    if (invalidFiles.length > 0) {
      setError('Only Excel files (.xls, .xlsx) are allowed.');
    } else {
      setError('');
    }
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter(isExcelFile);
    const invalidFiles = selectedFiles.filter((file) => !isExcelFile(file));

    if (invalidFiles.length > 0) {
      setError('Only Excel files (.xls, .xlsx) are allowed.');
    } else {
      setError('');
    }
    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const handleDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };
  const handleUpload = () => {
    setVisible(true);

    const encodeFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const uploadFiles = async () => {
        try {
            const encodedFiles = await Promise.all(
                files.map(async (file) => ({
                    filename: file.name,
                    contentType: file.type,
                    data: await encodeFileToBase64(file), // Base64 encoded content
                }))
            );

            const payload = {
                groupId:membersGroupId,
                orgGroupCode:groupID,
                files: encodedFiles, // Array of files with Base64 data
            };

            // Send as JSON
            fetch(`${import.meta.env.VITE_BASE_URL}group-members/group-file`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
                .then((response) => response.text())
                .then((data) => console.log(data))
                .catch((error) => console.error("Error:", error));
        } catch (error) {
            console.error("Error encoding files:", error);
        }
    };

    uploadFiles();
};


   
useEffect(()=>{
  try {
 
    fetch(`${import.meta.env.VITE_BASE_URL}groups/get/${groupID}`)
      .then((datas)=>{
          console.log(datas);
        return datas.json();
      }).then((data)=>{
          console.log(data);
          setOrganisationfetch(data)
      })
      .catch((err)=>{
        console.log(err)
      })

}catch (error) {
  // Handle any errors that occurred during the fetch
  console.error('There was a problem with the fetch operation:', error);
}
},[])




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
                    <h3>Upload file Contacts</h3>
                  </div>
                </CAlert>
              </CCardTitle>
              
              <div className="mb-3">
                    <CFormLabel htmlFor="exampleFormControlInput1">Group</CFormLabel>
                    <CFormSelect id="exampleFormControlInput1" aria-label="Default select example" value={membersGroupId} onChange={(e)=>setMembersGroupId(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}> 
                                <option value="">Select Group</option> {/* Default option */}
                                    {organisationfetch &&
                                    organisationfetch.map((data, index) => (
                                        <option key={index} value={data.groupId}>
                                        {data.groupName}
                                        </option> 
                                ))}      
                    </CFormSelect>
                    </div>
              <div
                style={{
                  background: '#f3f4f6',
                  border: '2px dashed rgba(71, 71, 212,0.6)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'gray',
                  padding: '20px',
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <CIcon icon={cilCloudUpload} size="3xl" />
                <h3>Drag and Drop files to upload</h3>
                <h3>Or</h3>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  hidden
                  ref={inputRef}
                />
                <CButton
                  type="button"
                  color="dark"
                  id="inputGroupFileAddon04"
                  onClick={() => inputRef.current.click()}
                  style={{ margin: '20px' }}
                >
                  Select Files
                </CButton>
              </div>

              {error && <CAlert color="danger">{error}</CAlert>}
              {files.length > 0 && (
                <div style={{ margin: '40px' }}>
                  <CListGroup flush>
                    {files.map((file, idx) => (
                      <CListGroupItem
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        {file.name}
                        <CButton
                          color="danger"
                          style={{ color: '#fff' }}
                          onClick={() => handleDelete(file)}
                        >
                          <CIcon icon={cilTrash} />
                        </CButton>
                      </CListGroupItem>
                    ))}
                  </CListGroup>
                  <div style={{ margin: '15px', width: '100%' }} className="d-grid gap-2">
                    <CButton
                      color="success"
                      onClick={handleUpload}
                      style={{ marginRight: '20px', color: '#fff' }}
                      xs={10}
                    >
                      Upload
                    </CButton>
                  </div>
                </div>
              )}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CModalBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '50px',
            textAlign: 'center',
          }}
        >
          <CModalTitle style={{ width: '100%' }}>
            <h2>Uploaded Successfully</h2>
          </CModalTitle>
          <Link style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CButton color="primary" className="mt-3" style={{ width: '80%' }} onClick={()=>setVisible(false)}>
              OK
            </CButton>
          </Link>
        </CModalBody>
      </CModal>
    </>
  );
}

export default uploadContacts;























