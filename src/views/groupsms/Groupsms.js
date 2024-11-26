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
  CFormLabel,
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
import Swal from 'sweetalert2'

function Groupsms() {

  const inputRef = useRef();
  const[senderId, setSenderId] = useState([]);
  const[organisationfetch,setOrganisationfetch] = useState([])
  const groupID = Cookies.get('groupId');
  const [orgCode, setOrgCode] = useState()
  const[contact, setContact] = useState()
  const [groupId, setGroupId] = useState()
  const [message, setMessage] = useState()
  const [code, setCode] = useState();



  
  const handleSubmit = async(e)=>{

    e.preventDefault()

    

   if(groupId && contact && message) {
    try {
   
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}group-messagein-file`, {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add other headers as necessary
            },
            body: JSON.stringify(
                {
                    code:code,
                    phoneNumber : contact,
                    message : message,
    
                }
            ) // Convert the data to a JSON string for the body
        });
        
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
     
        // Parse the JSON response
        const responseData = await response.text();
        console.log(responseData)
        Swal.fire({
            title: responseData,
            text: "Message Sent",
            icon: "success"
          });
        console.log(responseData)
        //return responseData; // Return the parsed JSON
        
        console.log(contact,message)
    // setShowdashboard(true)
        


    }catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: error
      });
    }
    }else{
        Swal.fire({
            icon: "error",
            title: "Please Insert Data",
            text: "Empty input field",
          });
    }


  }


 


 
   

     //fetching all data organisation
     useEffect(()=>{
      try {
     
        fetch(`${import.meta.env.VITE_BASE_URL}org_group_id/${groupID}`)
          .then((datas)=>{
              console.log(datas);
            return datas.json();
          }).then((data)=>{
              console.log(data);
              setSenderId(data)
          })
          .catch((err)=>{
            console.log(err)
          })
  
    }catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);
    }
    },[])
  











































  
  

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



  useEffect(()=>{
    try {

      console.log(groupId)
   
        fetch(`${import.meta.env.VITE_BASE_URL}group-members/getGroup${groupId}`)
        .then((datas)=>{
          return datas.json();
        }).then((data)=>{
          console.log(data)
          data.map((dat)=>setContact(dat.phoneNumber))
           
        })
        .catch((err)=>{
          console.log(err)
        })

        console.log(contact)


      
      //setSuccess(true)
      
  // setShowdashboard(true)

  }catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
  },[groupId])


  


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
              
              <CForm onSubmit={handleSubmit}  style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>
              <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Select Sender ID</CFormLabel>
                        <CFormSelect id="exampleFormControlInput1" aria-label="Default select example" value={code} onChange={(e)=>setCode(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}> 
                            <option value="">Select Sender Id</option> {/* Default option */}
                                {senderId &&
                                senderId.map((data, index) => (
                                    <option key={index} value={data.org_Code}>
                                    {data.url}
                                    </option> 
                                ))}
                                
                        </CFormSelect>
                </div>
                <div className="mb-3">
                <CFormSelect id="exampleFormControlInput2" aria-label="Default select example" value={groupId} onChange={(e)=>setGroupId(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}> 
                                <option value="">Select Group</option> {/* Default option */}
                                    {organisationfetch &&
                                    organisationfetch.map((data, index) => (
                                        <option key={index} value={data.groupId}>
                                        {data.groupName}
                                        
                                        </option> 
                                    ))}      
                </CFormSelect>
                </div>
                
                <div className="mb-3">

                <CFormTextarea
                    id="exampleFormControlTextarea1"
                    label="Text Message"
                    rows={3}
                    text="Must be 8-20 words long."
                    style={{  borderColor: "rgba(71, 71, 212,0.6)" }}
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
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

export default Groupsms;
