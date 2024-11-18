import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CImage, CModal, CModalBody, CModalFooter, CModalHeader, CRow, CSpinner } from '@coreui/react'
import { useNavigate } from 'react-router-dom';
import organisationIcon from 'src/assets/images/icons8-organization-96.png'
import errorIcon from 'src/assets/images/icons8-error.png'
import successIcon from 'src/assets/images/success-icon.png'
import Swal from 'sweetalert2'

function OrganisationRegistration() {

    const [org_name, setOrg_Name] = useState();

    const [org_code, setOrg_Code] = useState();
    //const [mbcode, setMbcode] = useState();
    const [clientId, setClientId] = useState();

    const [sms_Cost, setSms_Cost] = useState();
    const [accessKey, setAccessKey] = useState();
    const [apiKey, setApiKey] = useState();
    const [groupID, setGroupID] = useState();
    const [url, setUrl] = useState();

    const[successUpdate,setSuccessUpdate] = useState(false)

    //const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");


    const navigate = useNavigate();


    // Regex Patterns for Validation
    const regexPatterns = {
        org_name: /^[A-Za-z\s]+$/, // Only letters and spaces
        org_code: /^[A-Za-z0-9_-]+$/, // Alphanumeric, underscore, hyphen
       // mbcode: /^[A-Za-z0-9]+$/, // Alphanumeric only
        url: /^[A-Za-z\s]+$/, // URL validation
        accessKey: /^[A-Za-z0-9_-]+$/, // Alphanumeric, underscore, hyphen
        apiKey: /^[A-Za-z0-9_-]+$/, // Alphanumeric, underscore, hyphen
        groupID: /^[A-Za-z0-9_-]+$/, // Alphanumeric, underscore, hyphen
        sms_Cost: /^\d+(\.\d{1,2})?$/, // Numeric with up to two decimals
        clientId: /^[A-Za-z0-9]+$/, // Alphanumeric only
    };


    // Validate each input against its regex pattern
    const validateInput = (name, value) => {
        if (regexPatterns[name]) {
        return regexPatterns[name].test(value);
        }
        return true; // If no pattern defined, consider it valid
    };




    const handleSubmit = async(e)=>{
        e.preventDefault()


        // Perform final validation before submit
        if (
            validateInput("org_name", org_name) &&
            validateInput("org_code", org_code) &&
           // validateInput("mbcode", mbcode) &&
            validateInput("url", url) &&
            validateInput("accessKey", accessKey) &&
            validateInput("apiKey", apiKey) &&
            validateInput("groupID", groupID) &&
            validateInput("sms_Cost", sms_Cost) &&
           validateInput("clientId", clientId)
        ) {

            setSuccessUpdate(true)
    
            try {

               
        
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}registerOrganisation`, {
                    method: 'POST', // Specify the request method as POST
                    headers: {
                        'Content-Type': 'application/json', // Set the content type to JSON
                        // Add other headers as necessary
                    },
                    body: JSON.stringify({ 
                        org_Name: org_name,
                        org_Code:org_code,
                        mBCode:org_code, 
                        url:url,
                        smsCost: sms_Cost,
                        accessKey: accessKey,
                        apiKey: apiKey,
                        groupID: groupID,
                       // token:token,
                        clientId:clientId
                        

                    })
                });

                
            
                        
                if (!response.ok) {
                    // Capture the response text and display it in the modal
                    const errorMessage = await response.text();
                    throw new Error(errorMessage);
                }

                            
                // Parse the response text as it is returned as a string by Spring Boot
                const message = await response.text();

                message == "Registration failed" 
                || message == "Registration failed. Organization with the same org code already exists." 
                || message == "Registration failed. Url with the same url already exists."
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


      }else {
       // alert("Please ensure all fields are correctly filled based on the validation rules.");
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
                        <h3>Register Organisation</h3>
                    </CCardTitle>
                    <CForm onSubmit={handleSubmit} style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>



                    <CRow>
                    <CCol>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Organisation Code</CFormLabel>
                        <CFormInput
                            type="number"
                            id="exampleFormControlInput1"
                            placeholder="Enter Organisation Code"
                            style={{ borderColor: org_code ? validateInput("org_code", org_code) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setOrg_Code(e.target.value)}
                        />
                        { org_code ? validateInput("org_code", org_code)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                    </div>
                    </CCol>
                    <CCol>
                    <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Organisation Name</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter Organisation Name"
                            onChange={(e)=>setOrg_Name(e.target.value)}
                            style={{ borderColor: org_name ? validateInput("org_name", org_name) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                        />
                        { org_name ? validateInput("org_name", org_name)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                        </div>
                    </CCol> 
                   
                    </CRow>
                    <CRow>
                        <CCol>
                            <div className="mb-3">
                            <CFormLabel htmlFor="exampleFormControlInput1">Sender Id</CFormLabel>
                            <CFormInput
                                type="text"
                                id="exampleFormControlInput1"
                                placeholder="Enter Sender Id"
                                style={{ borderColor:  url ? validateInput("url", url) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                                onChange={(e)=>setUrl(e.target.value)}
                            />
                            { url ? validateInput("url", url)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                            </div>
                        </CCol>
                        <CCol>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Group Id</CFormLabel>
                        <CFormInput
                            type="number"
                            id="exampleFormControlInput1"
                            placeholder="Enter Group Id"
                            style={{ borderColor: groupID ? validateInput("groupID", groupID) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setGroupID(e.target.value)}
                        />
                        { groupID ? validateInput("groupID", groupID)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                        </div>
                       </CCol>


                       
                        

                    </CRow>
                    <CRow>

                    <CCol>
                         <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Sms Cost</CFormLabel>
                        <CFormInput
                            type="text"
                            step="0.01" 
                            id="exampleFormControlInput1"
                            placeholder="Enter The Sms Cost"
                            style={{  borderColor:  sms_Cost ? validateInput("sms_Cost", sms_Cost) ? "rgba(71, 71, 212,0.6)" : "red":"rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setSms_Cost(e.target.value)}
                        />
                        { sms_Cost ? validateInput("sms_Cost", sms_Cost)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                        </div>
                        </CCol>


                        <CCol>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Access Key</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter Access Key"
                            style={{ borderColor: accessKey ? validateInput("accessKey", accessKey) ? "rgba(71, 71, 212,0.6)" : "red" :  "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setAccessKey(e.target.value)}
                        />
                        { accessKey ? validateInput("accessKey", accessKey)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                        </div>
                        </CCol>

                        
                       
                       
                    </CRow>  
                    <CRow>
                    <CCol>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Api Key</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter Api Key"
                            style={{ borderColor: apiKey ? validateInput("apiKey", apiKey) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setApiKey(e.target.value)}
                        />
                        { apiKey ? validateInput("apiKey", apiKey)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
                        </div>
                        </CCol>
                    <CCol>
                        <div className="mb-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Client Id</CFormLabel>
                        <CFormInput
                            type="text"
                            id="exampleFormControlInput1"
                            placeholder="Enter ClientId"
                            style={{ borderColor: clientId ? validateInput("clientId", clientId) ? "rgba(71, 71, 212,0.6)" : "red" : "rgba(71, 71, 212,0.6)" }}
                            onChange={(e)=>setClientId(e.target.value)}
                        />
                        { clientId? validateInput("clientId", clientId)?<span></span>:<span style={{marginLeft:"10px", color:"red"}}>Incorrect</span>: <span></span>}
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

export default OrganisationRegistration;