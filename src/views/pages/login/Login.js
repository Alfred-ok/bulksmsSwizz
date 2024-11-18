import React, {useContext, useState} from 'react'
//import { Link } from 'react-router-dom'
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
  CFormSelect,
  CImage,
  CAlert,
  CSpinner
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthContext from '../../../Context/AuthProvider'
//import axios from 'axios'
import Cookies from 'js-cookie'
import errorIcon from 'src/assets/images/icons8-error.png'
const ParticlesComponent = React.lazy(()=>import('./ParticlesComponent'))

const Login = () => {

  const [loginusername, setLoginUsername] = useState('');
  const [password, setPassword] = useState('');
  const responseMessage = Cookies.get('responseMessage');

  const[successUpdate,setSuccessUpdate] = useState(false);

  const navigate = useNavigate();
  const { setRole, setUsername,setAuthToken} = useContext(AuthContext);

  const handleSubmit = async(e)=>{
    e.preventDefault()

    setSuccessUpdate(true)
    

    try {

      
      const BaseUrl = import.meta.env.VITE_BASE_URL
      console.log( "Base URL:", BaseUrl);
   
        const response = await fetch( `${BaseUrl}auth/authenticate`, {
            method: 'POST', // Specify the request method as POST
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                // Add other headers as necessary
            },
            body: JSON.stringify({ username: loginusername, password: password}) // Convert the data to a JSON string for the body
        });
       

        // Check if the response is okay (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log(response)
     
        // Parse the JSON response
        const responseData = await response.json();
        //return responseData; // Return the parsed JSON
        console.log(responseData)

        setSuccessUpdate(false);


        setRole(responseData.role)
        setUsername(responseData.user)
       // setResponseMessage(responseData.responseMessage);
        

        setAuthToken({
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken
        })

        Cookies.set('username', responseData.user, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });
        Cookies.set('role', responseData.role, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });
        Cookies.set('refreshToken', responseData.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });Cookies.set('responseMessage', responseData.responseMessage, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });Cookies.set('groupId', responseData.groupId, {
          expires: 7,
          secure: true,
          sameSite: 'Strict',
          path: '/',
        });

       

        

        //setSuccess(true)
        
    // setShowdashboard(true)

    }catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('There was a problem with the fetch operation:', error);

      setSuccessUpdate(false);
    }

   
      navigate('/dashboard');
    
  }

  return (
    <ParticlesComponent>
    <div
    /*
      style={{
          backgroundImage: "url('src/assets/images/login-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundColor:"rgba(0,0,0,0.5)",
          backgroundSize: "cover",
          backgroundBlendMode:"multiply",
          overflow:"hidden",
        }}*/
      >
      
      <CContainer> 
        <CRow className="justify-content-center">
          <CCol md={4}>
              <CCard variant='solid' style={{backgroundColor:"transparent", border:"none"}} ><h3 style={{textAlign:"center", color:"#fff", padding:"20px"}}>WAZI MOBILE</h3></CCard>
              <CCard className="p-4"  style={{ boxShadow: "0px 15px 34px 0px rgba(0,0,0,0.2)" }}>
                <CCardBody>

                    {
                      responseMessage == "Login Failed" ?
                      <CAlert color="danger" style={{textAlign:"center"}}>
                        <CImage src={errorIcon} height={50} />
                        <h5 style={{margin :"4px 0px"}}>{responseMessage}</h5> 
                        <p style={{margin :"0"}}>Wrong username or password. Try again</p>
                      </CAlert>
                      :
                        null
                    }
                  <CForm onSubmit={handleSubmit} style={{ textAlign: "center" }} >
                    <h1 style={{ marginTop: "10px" }}>Login</h1>
                    <p className="text-body-secondary" style={{ marginTop: "10px" }}>Sign In to your account</p>
                    <CInputGroup className="mb-3" style={{ marginTop: "20px" }}>
                      <CInputGroupText
                        style={{
                        borderColor: "rgb(71, 71, 212)",
                        backgroundColor: "rgb(71, 71, 212)",
                        color: "#fff",
                      }}
                      >
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Username" 
                        autoComplete="username" 
                        value={loginusername} 
                        onChange={(e)=>setLoginUsername(e.target.value)}
                        style={{ borderColor: "rgb(71, 71, 212)" }} 
                        required/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText
                        style={{
                        borderColor: "rgb(71, 71, 212)",
                        backgroundColor: "rgb(71, 71, 212)",
                        color: "#fff",
                      }}
                      >
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        style={{ borderColor: "rgb(71, 71, 212)" }}
                      />
                    </CInputGroup>


                    <CRow>
                      <CCol xs={12} style={{ marginTop: "15px" }}>
                      {
                        successUpdate ?
                        <CButton color="primary" type="submit" className="px-4"  disabled style={{width:"100%"}}>
                            <CSpinner as="span" size="sm"/> authenticating ...
                        </CButton>
                        :
                        <CButton color="primary" className="px-4" type="submit"  style={{ width: "100%" }}>
                          Login
                        </CButton>
                      }
                        
                      </CCol>

                      <CCol xs={12} className="text-right" style={{ marginTop: "15px" }}>
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>

                  </CForm>

                </CCardBody>
              </CCard>
          </CCol>
        </CRow>
      </CContainer>
      
    </div>
    </ParticlesComponent>
  )
}

export default Login
