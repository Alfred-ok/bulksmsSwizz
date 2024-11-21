import React, { useEffect, useRef, useState } from 'react';
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalTitle,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilTrash, cilCloudUpload, cilFile, cilGroup } from '@coreui/icons';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function GroupsmsFileCustom() {

  const inputRef = useRef();
  const[organisationfetch, setOrganisationfetch] = useState([]);
  const groupID = Cookies.get('groupId');
  const [orgCode, setOrgCode] = useState()

  const handleDragOver = (e) => {
    e.preventDefault();
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
                  <CIcon icon={cilGroup} className="flex-shrink-0 me-2" width={34} height={34} />
                  <div>
                    <h3>Group Sms</h3>
                  </div>
                </CAlert>
              </CCardTitle>
              
              <CForm  style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>
                

                <div className="mb-3">
                    <CFormInput type="file" id="formFile" label="Choose File" style={{  borderColor: "rgba(71, 71, 212,0.6)" }}/>
                </div>

                <div className="mb-3">

                <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="Text Message"
                    rows={3}
                    text="Must be 8-20 words long."
                    style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                ></CFormTextarea>
                </div> 
                <div className="col-auto" style={{width:"80%", paddingTop:"20px", margin:"0px auto"}}>
                  <CButton color="primary" type="submit" className="mb-3" style={{width:"100%", margin:"0 auto"}}>
                      Send Sms
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
