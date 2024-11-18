import React, { useEffect } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import AuthContext from './AuthProvider'
import { useContext } from 'react'
import Cookies from 'js-cookie';
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';

function RequireAuth() {
    //const{username, setAuthToken, authToken} = useContext(AuthContext);
    const location = useLocation(); 


    const refreshTokenInCookie = Cookies.get('refreshToken');
    const responseMessage = Cookies.get('responseMessage');



  return (
    refreshTokenInCookie && responseMessage == "Successful" && refreshTokenInCookie
                  ? <Outlet/> 
                  : <Navigate to= "/login" state={{from: location}} replace/>
  )
}

export default RequireAuth