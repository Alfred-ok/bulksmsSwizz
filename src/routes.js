import { element } from 'prop-types'
import React from 'react'
import uploadContacts from './views/contacts/uploadContacts'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))



// Sms and Campaigns

const SendSms = React.lazy(()=>import('./views/sms&campaigns/SendSms'))
const SendFromFile = React.lazy(()=>import('./views/sms&campaigns/SendFromFile'))
const SentMessages = React.lazy(()=>import('./views/sms&campaigns/SentMessages'))
const BuyNow = React.lazy(()=>import('./views/purchases/BuyNow'))
const Price = React.lazy(()=>import('./views/purchases/Price') )
const MpesaPayment = React.lazy(()=>import('./views/purchases/MpesaPayment'))

//oragnisation

const Organisation = React.lazy(()=>import('./views/organisations/OrganisationList'))
const OrganisationRegistration = React.lazy(()=>import('./views/organisations/OrganisationRegistration'))
const User = React.lazy(()=>import('./views/organisations/userAccounts/UserList'))
const RegisterUser = React.lazy(()=>import('./views/organisations/userAccounts/RegisterUser'))
const groups = React.lazy(()=>import('./views/GrandGroups/GrandGroupone'))
const CreateNewGroup = React.lazy(()=>import('./views/GrandGroups/CreateNewGroup'))

const Contact = React.lazy(()=>import('./views/contacts/contact'))

const Groupsms = React.lazy(() => import('./views/groupsms/Groupsms'))
const ContactList = React.lazy(()=> import('./views/contacts/contactList'))
const GroupsSmsFile = React.lazy(()=>  import('./views/groupsms/GroupsSmsFile'))
const GroupsSmsFileCustom = React.lazy(() =>  import('./views/groupsms/GroupsmsFileCustom'))





const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  //users

  { path:'/send-sms', name:'Send SMS', element: SendSms},
  { path:'/send-from-file', name:'Send from file',element:SendFromFile},
  { path:'/sent-messages', name:'Sent Messages',element:SentMessages},
  { path:'/buy-now', name:'Buy now',element:BuyNow},
  { path:'/price', name: 'price', element:Price },
  { path:'/mpesapayment', name:'mpesa payment', element: MpesaPayment},

  ///organisation

  { path:'/organisation', name:'Organisation', element: Organisation},
  { path:'/organistion-registeration', name:'Register', element: OrganisationRegistration},
  { path:'/user', name:'User', element: User},
  { path:'/user-registration', name:'Register User', element: RegisterUser},

  { path:'/groups', name:'Groups', element: groups},

  {path:'/create-new-group', name:'Create New Group', element: CreateNewGroup},

  {path:'/contacts', name:'Contacts', element: Contact },

  {path:'/upload-contacts', name:'Contacts', element: uploadContacts },


  {path:'/groups-sms', name:'Groupsms', element: Groupsms },

  {path:'/contact-list', name:'ContactList', element:ContactList },

  {path:'/groups-sms-file', name:'ContactList', element:GroupsSmsFile},

  {path: '/groups-sms-file-custom', name:'Custom-file', element: GroupsSmsFileCustom}

]

export default routes
