import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

//import { logo } from 'src/assets/brand/logo'
//import { sygnet } from 'src/assets/brand/sygnet'
//import { useContext } from 'react'
//import AuthContext from '../Context/AuthProvider'
//import Cookies from 'js-cookie';


// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  //const { username} = useContext(AuthContext);
  //const username = Cookies.get('username');

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{
        boxShadow: '20px 0px 60px -5px rgba(0,0,0,0.2)',
        zIndex: 3,
      }}
    >
      <CSidebarHeader className="border-bottom">
        <span style={{display:'flex', marginLeft:'15px'}}>
          <h4>WAZI MOBILE</h4>
        </span>
        {/*
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        */}
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
        
      </CSidebarHeader>

      <AppSidebarNav items={navigation} />
       {
        /*
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
        */
        } 
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
