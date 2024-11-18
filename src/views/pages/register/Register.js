import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try {
        
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}auth/register`, {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add other headers as necessary
            },
            body: JSON.stringify({ username: username, password: password, role: role}) // Convert the data to a JSON string for the body
        });
        /*
       const response = axios.post("http://localhost:8080/auth/authenticate",
              JSON.stringify({ username: loginusername, password: password}),
              {
                headers: {"Content-Type": "application/json"},
                withCredentials:true
              }
            );
            */
        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
     
        // Parse the JSON response
        const responseData = await response.json();
        //return responseData; // Return the parsed JSON
        console.log(responseData)
        
        //setSuccess(true)
        
    // setShowdashboard(true)

    }catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);
    }

   
    navigate('/login');
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>

                  <CForm onSubmit={handleSubmit} >
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CFormSelect aria-label="Small select example" value={role} onChange={(e)=>setRole(e.target.value)} required> 
                        <option value="">Choose Your Role</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                      </CFormSelect>
                    </CInputGroup>


                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>

                     
                    </CRow>

                  </CForm>

                </CCardBody>
              </CCard>



              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
