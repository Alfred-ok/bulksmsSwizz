import{h as f,r as o,A as m,n as y,j as r}from"./index-DxiAcUCP.js";import{C as I}from"./index.esm-Cy3LKcd6.js";import{C as S,a as v}from"./CRow-BRiTm5IC.js";import{C as F,a as N}from"./CCardBody-CGlVQwBB.js";import{C as U}from"./CCardTitle-gVDurk02.js";import{C as B}from"./CAlert-7UTiU2fV.js";import{a as w}from"./DefaultLayout-BmgnOIWU.js";import{C as D}from"./CForm-DJgMOtbZ.js";import{a as t}from"./CFormControlWrapper-BYq7y8h4.js";import{C as _}from"./CFormSelect-tuFcfyUE.js";import{C as l}from"./CFormInput-BveaeGyj.js";import{b as K}from"./CContainer-HlgF_dlK.js";import"./CCloseButton-BkFP51Rh.js";function J(){const c=f.get("groupId"),[a,p]=o.useState([]),[s,h]=o.useState(),[n,u]=o.useState(),[i,d]=o.useState(),{purchaseSmsUnit:O,setPurchaseSmsUnit:x}=o.useContext(m),{OrganisationDataID:k,setOrganisationDataID:C}=o.useContext(m),g=y();o.useEffect(()=>{try{fetch(`https://wazimobile-sms-backend.onrender.com/org_group_id/${c}`).then(e=>(console.log(e),e.json())).then(e=>{console.log(e),p(e)}).catch(e=>{console.log(e)})}catch(e){console.error("There was a problem with the fetch operation:",e)}},[]),o.useEffect(()=>{try{fetch(`https://wazimobile-sms-backend.onrender.com/get_organisation/${n}`).then(e=>e.json()).then(e=>{console.log(e),h({balance:e.balance,smsCost:e.smsCost,sms_Units:e.sms_Units,accessKey:e.accessKey,apiKey:e.apiKey,clientId:e.clientId,groupID:e.groupID,mbcode:e.mbcode,org_Code:e.org_Code,org_Name:e.org_Name,token:e.token,url:e.url})}).catch(e=>{console.log(e)})}catch(e){console.error("There was a problem with the fetch operation:",e)}},[n]);const b=e=>{e.preventDefault(),x({price:s.smsCost,quantity:i}),g("/price")};return C(n),r.jsx(r.Fragment,{children:r.jsx(S,{children:r.jsx(v,{xs:9,style:{margin:"0px auto"},children:r.jsx(F,{className:"mb-4",style:{boxShadow:"0px 15px 34px 0px rgba(0,0,0,0.2)"},children:r.jsxs(N,{children:[r.jsx(U,{children:r.jsxs(B,{color:"primary",variant:"solid",className:"d-flex align-items-center",xs:10,children:[r.jsx(I,{icon:w,className:"flex-shrink-0 me-2",width:34,height:34}),r.jsx("div",{children:r.jsx("h3",{children:"Buy Sms"})})]})}),r.jsxs(D,{onSubmit:b,children:[r.jsxs("div",{className:"mb-3",children:[r.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Select Sender ID"}),r.jsxs(_,{id:"exampleFormControlInput1","aria-label":"Default select example",value:n,onChange:e=>u(e.target.value),style:{borderColor:"rgba(71, 71, 212,0.6)"},children:[r.jsx("option",{value:"",children:"Select Sender Id"})," ",a&&a.map((e,j)=>r.jsx("option",{value:e.id,children:e.url},j))]})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Sms Balance"}),r.jsx(l,{type:"text",id:"exampleFormControlInput1",placeholder:"Sms Balance",style:{borderColor:"rgba(71, 71, 212,0.6)"},value:s&&s.balance})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Sms Units Balance"}),r.jsx(l,{type:"text",id:"exampleFormControlInput1",placeholder:"Sms Units Balance",style:{borderColor:"rgba(71, 71, 212,0.6)"},value:s&&s.sms_Units})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Price in Ksh"}),r.jsx(l,{type:"text",id:"exampleFormControlInput1",placeholder:"Price in Ksh",style:{borderColor:"rgba(71, 71, 212,0.6)"},value:s&&s.smsCost})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx(t,{htmlFor:"exampleFormControlInput1",children:"Purchase Sms Units"}),r.jsx(l,{type:"text",id:"exampleFormControlInput1",placeholder:"Purchase Sms Units",style:{borderColor:"rgba(71, 71, 212,0.6)"},value:i,onChange:e=>d(e.target.value),required:!0})]}),r.jsx("div",{className:"col-auto",children:r.jsx(K,{color:"primary",type:"submit",className:"mb-3",children:"SUBMIT"})})]})]})})})})})}export{J as default};