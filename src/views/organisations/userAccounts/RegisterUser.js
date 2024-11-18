import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardHeader, CCardTitle, CCol, CForm, CFormInput, CFormLabel, CFormTextarea, CRow, CFormSelect, CImage, CSpinner, CModal, CModalBody } from '@coreui/react'
import userRegistration from 'src/assets/images/icons8-registration-96.png'

function RegisterUser() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [organisation, setOrganisation] = useState();
    const [userName, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [roles, setRoles] = useState();
    const[responseMessage, setResponseMessage] = useState();

    const[organisationfetch, setOrganisationfetch] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    
    const navigate = useNavigate();

    const[successUpdate,setSuccessUpdate] = useState(false)

//fetching organisation
    useEffect(()=>{
        try {
       
          fetch(`${import.meta.env.VITE_BASE_URL}get_User`)
            .then((datas)=>{
              return datas.json();
            }).then((data)=>{
                console.log(data);
                setOrganisationfetch(data)
            })
            .catch((err)=>{
              console.log(err)
            })
    
          
          //setSuccess(true)
          
      // setShowdashboard(true)
    
      }catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
      }
      },[])
    
    

    const handleSubmit = async(e)=>{
        e.preventDefault()

        setSuccessUpdate(true)
    
        try {
       
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}auth/register`, {
                method: 'POST', // Specify the request method as POST
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                    // Add other headers as necessary
                },
                body: JSON.stringify(
                    {
                        names: name,
                        email: email,
                        organisation: organisation,
                        userName: userName,
                        password: password,
                        roles: roles,
                        groupID: organisation
                    }
                ) // Convert the data to a JSON string for the body
            });
           
            // Check if the response is okay (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
             
            const responseData = await response.json();
            //const data = response.json().
            //console.log(responseData);
            setResponseMessage(responseData.ResponseMessage)

            setModalVisible(true);
            
            //setSuccess(true)
            
        // setShowdashboard(true)
    
        }catch (error) {
          // Handle any errors that occurred during the fetch
          console.error('There was a problem with the fetch operation:', error);
        }
    
        setSuccessUpdate(false)
       // navigate('/user');
      }

  return (
    <>
        <CRow>
            <CCol xs={10} style={{margin:"0 auto"}}>
                <CCard className="mb-4" style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)" }}>
                
                <CCardBody style={{padding:"35px"}}>
                    <CCardTitle>
                        <span style={{fontSize:"30px", color:'rgb(71, 71, 212)', padding:"20px 20px", display:"flex", alignItems:"center"}}>
                            
                            <svg style={{marginRight:"7px"}} xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
                            </svg> 
                            User Registration
                        </span>
                    </CCardTitle>
                    
                    <CForm onSubmit={handleSubmit} style={{backgroundColor:"rgba(0,0,0,0.1)", padding:"25px", borderRadius:"5px"}}>
                        
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">User name</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="exampleFormControlInput1"
                                        placeholder="User name"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput2">E-Mail Address</CFormLabel>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput2"
                                        placeholder="E-Mail Address"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput3">Names</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="exampleFormControlInput3"
                                        placeholder="Names"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput4">Password</CFormLabel>
                                    <CFormInput
                                        type="password"
                                        id="exampleFormControlInput4"
                                        placeholder="Password"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput5">Confirm password</CFormLabel>
                                    <CFormInput
                                        type="password"
                                        id="exampleFormControlInput5"
                                        placeholder="Confirm password"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        onChange={(e)=>setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </CCol>
                            <CCol>

                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput6">Roles</CFormLabel>
                                    <CFormSelect 
                                        id="exampleFormControlInput6"
                                        aria-label="Default select example"
                                        style={{borderColor: "rgba(71, 71, 212,0.6)"}}
                                        value={roles} onChange={(e)=>setRoles(e.target.value)} 
                                        required
                                        options={[
                                            'Select Role',
                                            { label: 'Admin', value: 'ProT_917201762254' },
                                            { label: 'User', value: 'ProT_917201762349' },
                                        ]}/>
                                        
                                </div>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput6">Organisation</CFormLabel>
                                    <CFormSelect className="mb-3" aria-label="Small select example" style={{borderColor: "rgba(71, 71, 212,0.6)"}} value={organisation} onChange={(e)=>setOrganisation(e.target.value)} >
                                        <option value="">Organisation</option> {/* Default option */}
                                        {organisationfetch &&
                                        organisationfetch.map((data, index) => (
                                            <option key={index} value={data.organisation}>
                                            {data.userName}
                                            </option> 
                                        ))}
                                    </CFormSelect>
                                </div>
                            </CCol>
                            <CCol>
                                
                            </CCol>
                        </CRow>


                        <div className="col-auto" style={{width:"60%", paddingTop:"20px", margin:"0px auto"}}>

                           
                            { 
                            successUpdate  ?  
                                
                                <CButton color="primary" type="submit" className="mb-3" disabled style={{width:"100%", margin:"0 auto"}}>
                                    <CSpinner as="span" size="sm"/> Uploading Data ...
                                </CButton>
                                :
                                <CButton color="primary" type="submit" className="mb-3"  style={{width:"100%", margin:"0 auto"}}>
                                    REGISTER
                                </CButton>
                            }
                        </div>
                    </CForm>
                </CCardBody>
                </CCard>
            </CCol>

        </CRow>
        <CModal visible={modalVisible} onClose={() => setModalVisible(false)} >   
        {
            responseMessage == "Successful"  ?     
            <CModalBody style={{textAlign:"center"}}>
                <p style={{width:"250px", margin:"20px auto", fontWeight:"bold"}}>{responseMessage}</p>
                <CButton color="primary" onClick={() => {setModalVisible(false);navigate('/user');}} style={{color:"#fff", margin:"10px", width:"80%"}}>
                    OK
                </CButton>
            </CModalBody> 
            :
            <CModalBody style={{textAlign:"center"}}>
                <p style={{width:"250px", margin:"20px auto", fontWeight:"bold"}}>{responseMessage}</p>
                <CButton color="primary" onClick={() => setModalVisible(false)} style={{color:"#fff", margin:"10px", width:"80%"}}>
                    OK
                </CButton>
            </CModalBody> 
        }
        </CModal> 
    </>
  )
}

export default RegisterUser