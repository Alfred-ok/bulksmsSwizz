import { CAlert, CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { DocsExample } from '../../components'
import CIcon from '@coreui/icons-react';
import { cilCash, cilSpeech } from '@coreui/icons';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'

function SendSms() {

    const groupID = Cookies.get('groupId');
    const[organisationfetch, setOrganisationfetch] = useState([]);

    const [code, setCode] = useState();
    const [contact, setContact] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = async(e)=>{
        e.preventDefault()
       if(code && contact && message) {
        try {
       
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}messagein`, {
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
                        msgStatus : "1",
                        sendStatus :"SEND"
        
                    }
                ) // Convert the data to a JSON string for the body
            });

            setCode('')
            setContact('')
            setMessage('')
            
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
         
            // Parse the JSON response
            const responseData = await response.text();
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

        setCode('')
        setContact('')
        setMessage('')
    
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
            <CCol xs={9}>
                <CCard className="mb-4" style={{ boxShadow: '0px 15px 34px 0px rgba(0,0,0,0.2)' }}>
                
                <CCardBody>
                    <CCardTitle>
                        <CAlert color='primary' variant="solid" className="d-flex align-items-center" xs={10} >
                            <CIcon icon={cilSpeech} className="flex-shrink-0 me-2" width={34} height={34}/>
                            <div><h3>Send Sms</h3></div>
                        </CAlert>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Select Sender ID</CFormLabel>
                        <CFormSelect id="exampleFormControlInput1" aria-label="Default select example" value={code} onChange={(e)=>setCode(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}> 
                            <option value="">Select Sender Id</option> {/* Default option */}
                                {organisationfetch &&
                                organisationfetch.map((data, index) => (
                                    <option key={index} value={data.org_Code}>
                                    {data.url}
                                    </option> 
                                ))}
                                
                        </CFormSelect>
                        </div>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Contacts (comma separated)</CFormLabel>
                        <CFormTextarea  id="exampleFormControlTextarea1" rows={3} value={contact} onChange={(e)=>setContact(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }} ></CFormTextarea>
                        </div>

                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlTextarea1">Enter Message</CFormLabel>
                        <CFormTextarea id="exampleFormControlTextarea1" rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} style={{  borderColor: "rgba(71, 71, 212,0.6)" }}></CFormTextarea>
                        <p>Characters: 0/1224 <span style={{color:'grey', margin:'0px 10px'}}>|</span> Pages: 1/8</p>
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
  )
}

export default SendSms