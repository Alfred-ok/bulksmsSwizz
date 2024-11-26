import React from 'react'
import CIcon from '@coreui/icons-react'

import {
  cilCash,
  cilPeople,
  cilSpeech,
  cilStar,
  cilViewQuilt,
  cilBriefcase,
  cilGroup,
} from '@coreui/icons'


import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  /*

  {
    component: CNavTitle,
    name: 'User',
    role: 'USER',
  },


  {
    component: CNavTitle,
    name: 'Admin',
    role: 'ADMIN',
  },

*/

  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    role:"Allmembers",
    icon: <CIcon icon={cilViewQuilt} customClassName="nav-icon" />,
    /*badge: {
      color: 'info',
      text: 'NEW',
    },*/
  },

  //SMS and Campaigns

  

  {
    component: CNavGroup,
    name: 'SMS & Campaigns',
    to: '/',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
    roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
    role:"User",
    items: [
      {
        component: CNavItem,
        name: 'Send SMS',
        to: '/send-sms',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Send from file',
        to: '/send-from-file',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      
      {
        component: CNavItem,
        name: 'Send group sms',
        to: '/groups-sms',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Send Group Sms by File',
        to: '/groups-sms-file',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Send Group Sms by Custom file',
        to: '/groups-sms-file-custom',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      }
    ],
    
  },


  {
    component: CNavGroup,
    name: 'Groups',
    to: '/',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
    role:"User",
    items: [
      {
        component: CNavItem,
        name: 'group',
        to: '/groups',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Create New Group',
        to: '/create-new-group',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      
    ],
    
  },



  
  {
    component: CNavGroup,
    name: 'Contacts',
    to: '/',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
    role:"User",
    items: [
      {
        component: CNavItem,
        name: 'Contact List',
        to: '/contact-list',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Add Contact to Groups',
        to: '/contacts',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      {
        component: CNavItem,
        name: 'Upload Contacts',
        to: '/upload-contacts',
        roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
        role:"User"
      },
      
    ],
    
  },

 

  
  {
    component: CNavItem,
    name: 'Reports',
    to: '/sent-messages',
    icon: <CIcon icon={cilSpeech} customClassName="nav-icon" />,
    roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
    role:"User",
    
  },

 

  //Contacts and Groups

  /*
  {
    component: CNavGroup,
    name: 'Contacts & Groups',
    to: '/theme/typography',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Contact Groups',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Contacts',
        to: '/buttons/button-groups',
      },
    ],

  },
*/
  //purchases

  {
    component: CNavItem,
    name: 'Buy Sms',
    to: '/buy-now',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    roleCode: 'ProT_917201762349',//User == 'ProT_917201762349' },
    role:"User",
      
  },



  //client
/*
  {
    component: CNavItem,
    name: 'Clients',
    to: '/buttons',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },


  //sender

  {
    component: CNavGroup,
    name: 'Sender IDs',
    icon: <CIcon icon={cilPaperPlane} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Sender IDs',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Request for Sender ID',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Delegate Sender ID',
        to: '/forms/checks-radios',
      },
    ],
  },


  //Reports

  {
    component: CNavGroup,
    name: 'Reports',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'My delivery reports',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Download reports',
        to: '/forms/select',
      },
    ],
  },
*/



///organisation






{
  component: CNavItem,
  name: 'Organisations',
  to: '/organisation',
  icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  roleCode: "ProT_917201762254" ,//Admin = 'ProT_917201762254'
  role: "Admin"
  
},


{
  component: CNavItem,
  name: 'Users',
  to: '/user',
  icon: <CIcon icon={ cilPeople} customClassName="nav-icon" />,
  roleCode: "ProT_917201762254" ,//Admin = 'ProT_917201762254'
  role: "Admin"
},



















  /*
  {
    component: CNavTitle,
    name: 'Theme',
  },*/
  /*
  {
    component: CNavItem,
    name: 'SMS & Campaigns',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Contacts & Groups',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Purchases',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Clients',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Sender IDs',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Background Tasks',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },*/
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  /*
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  */
]

export default _nav
