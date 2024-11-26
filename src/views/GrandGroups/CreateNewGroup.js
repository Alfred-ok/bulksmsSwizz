

import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CRow, CSpinner } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import organisationIcon from 'src/assets/images/icons8-organization-96.png'
import errorIcon from 'src/assets/images/icons8-error.png'
import successIcon from 'src/assets/images/success-icon.png'
import Swal from 'sweetalert2'
import Cookies from 'js-cookie';




function  CreateNewGroup() {

    const [groupName, setGroupName] = useState();
    const [organisationCode, setOrganisationCode] = useState();
    const groupID = Cookies.get('groupId');

    const[successUpdate,setSuccessUpdate] = useState(false)

    //const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    const navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault()



            setSuccessUpdate(true)
    
            try {

               
        
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}groups`, {
                    method: 'POST', // Specify the request method as POST
                    headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                        // Add other headers as necessary
                    },
                    body: JSON.stringify({ 
                        groupName: groupName,
                        organisationGroup:groupID

                    })
                });

                
            
                        
                if (!response.ok) {
                    // Capture the response text and display it in the modal
                    const errorMessage = await response.json();
                    throw new Error(errorMessage);
                }

                            
                // Parse the response text as it is returned as a string by Spring Boot
                const message = await response.text();
                
                message == "Failed to create Group" 
                ?
                Swal.fire({
                    title: "Error",
                    text: message,
                    icon: "error"
                  })
                :
                Swal.fire({
                    title: "Successful",
                    text: message,
                    icon: "success"
                  })


                //setSuccess(true)
                
            // setShowdashboard(true)
        
    
            setSuccessUpdate(false)
            // On successful submission, navigate to the next page
           // navigate('/organisation');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setSuccessUpdate(false)
            Swal.fire({
                icon: "error",
                title: "Validation Error",
                text: "Please ensure all fields are correctly filled based on the validation rules.",
              });
        }



    }
  return (
    <>
      <CRow>
            <CCol xs={10} style={{margin:"0 auto"}}>
                <CCard className="mb-4" style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)" }} >
                
                <CCardBody style={{padding:"35px"}}>
                    <CCardTitle style={{padding:"20px 20px", display:'flex', alignItems:"center", color:'rgb(71, 71, 212)'}}>
                        <svg style={{marginRight:"8px"}}  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-building-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/>
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"/>
                            <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                        <h3>Create New Group</h3>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit} style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>



                    <CRow>
                    <CCol>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Group Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder=" Enter Group Name"
                            style={{ borderColor: "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setGroupName(e.target.value)}
                            value={groupName}
                        />
                    </div>
                    </CCol>
                    
            

                    </CRow>
                        
                        

                        <div className="col-auto" style={{width:"40%", paddingTop:"20px", margin:"0px auto"}}>
                           
                            { 
                            successUpdate  ?  
                                    <CButton color="success" type="submit" className="mb-3"  disabled style={{width:"100%", margin:"0 auto"}}>
                                        <CSpinner as="span" size="sm"/> Uploading Data ...
                                    </CButton>
                                :
                                    <CButton color="primary" type="submit" className="mb-3" style={{width:"100%", margin:"0 auto"}}>
                                        CREATE
                                    </CButton>

                            }
                        </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    </>
  )
}

export default  CreateNewGroup;