import{r as a,n as O,j as e,C as R}from"./index-DxiAcUCP.js";import{S as y}from"./sweetalert2.esm.all-DOYwHpwi.js";import{C as j,a as t}from"./CRow-BRiTm5IC.js";import{C as L,a as $}from"./CCardBody-CGlVQwBB.js";import{C as D}from"./CCardTitle-gVDurk02.js";import{C as T}from"./CForm-DJgMOtbZ.js";import{a as o}from"./CFormControlWrapper-BYq7y8h4.js";import{C as n}from"./CFormInput-BveaeGyj.js";import{b as v}from"./CContainer-HlgF_dlK.js";function J(){const[d,I]=a.useState(),[l,f]=a.useState(),[c,F]=a.useState(),[p,S]=a.useState(),[m,_]=a.useState(),[x,w]=a.useState(),[h,z]=a.useState(),[g,N]=a.useState(),[E,C]=a.useState(!1);a.useState(""),O();const b={org_name:/^[A-Za-z\s]+$/,org_code:/^[A-Za-z0-9_-]+$/,url:/^[A-Za-z\s]+$/,accessKey:/^[A-Za-z0-9_-]+$/,apiKey:/^[A-Za-z0-9_-]+$/,groupID:/^[A-Za-z0-9_-]+$/,sms_Cost:/^\d+(\.\d{1,2})?$/,clientId:/^[A-Za-z0-9]+$/},r=(s,i)=>b[s]?b[s].test(i):!0,K=async s=>{if(s.preventDefault(),r("org_name",d)&&r("org_code",l)&&r("url",g)&&r("accessKey",m)&&r("apiKey",x)&&r("groupID",h)&&r("sms_Cost",p)&&r("clientId",c)){C(!0);try{const i=await fetch("https://wazimobile-sms-backend.onrender.com/registerOrganisation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({org_Name:d,org_Code:l,mBCode:l,url:g,smsCost:p,accessKey:m,apiKey:x,groupID:h,clientId:c})});if(!i.ok){const A=await i.text();throw new Error(A)}const u=await i.text();u=="Registration failed"||u=="Registration failed. Organization with the same org code already exists."||u=="Registration failed. Url with the same url already exists."?y.fire({title:"Error",text:u,icon:"error"}):y.fire({title:"Successful",text:u,icon:"success"}),C(!1)}catch(i){console.error("There was a problem with the fetch operation:",i),C(!1),y.fire({icon:"error",title:"Validation Error",text:"Please ensure all fields are correctly filled based on the validation rules."})}}else C(!1),y.fire({icon:"error",title:"Validation Error",text:"Please ensure all fields are correctly filled based on the validation rules."})};return e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(t,{xs:10,style:{margin:"0 auto"},children:e.jsx(L,{className:"mb-4",style:{boxShadow:"0px 15px 34px 0px rgba(0,0,0,0.2)"},children:e.jsxs($,{style:{padding:"35px"},children:[e.jsxs(D,{style:{padding:"20px 20px",display:"flex",alignItems:"center",color:"rgb(71, 71, 212)"},children:[e.jsxs("svg",{style:{marginRight:"8px"},xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",fill:"currentColor",class:"bi bi-building-add",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"}),e.jsx("path",{d:"M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1z"}),e.jsx("path",{d:"M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"})]}),e.jsx("h3",{children:"Register Organisation"})]}),e.jsxs(T,{onSubmit:K,style:{backgroundColor:"rgba(0,0,0,0.1)",padding:"25px",borderRadius:"5px"},children:[e.jsxs(j,{children:[e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Organisation Code"}),e.jsx(n,{type:"number",id:"exampleFormControlInput1",placeholder:"Enter Organisation Code",style:{borderColor:l?r("org_code",l)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>f(s.target.value)}),l?r("org_code",l)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})}),e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Organisation Name"}),e.jsx(n,{type:"text",id:"exampleFormControlInput1",placeholder:"Enter Organisation Name",onChange:s=>I(s.target.value),style:{borderColor:d?r("org_name",d)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"}}),d?r("org_name",d)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})})]}),e.jsxs(j,{children:[e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Sender Id"}),e.jsx(n,{type:"text",id:"exampleFormControlInput1",placeholder:"Enter Sender Id",style:{borderColor:g?r("url",g)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>N(s.target.value)}),g?r("url",g)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})}),e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Group Id"}),e.jsx(n,{type:"number",id:"exampleFormControlInput1",placeholder:"Enter Group Id",style:{borderColor:h?r("groupID",h)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>z(s.target.value)}),h?r("groupID",h)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})})]}),e.jsxs(j,{children:[e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Sms Cost"}),e.jsx(n,{type:"text",step:"0.01",id:"exampleFormControlInput1",placeholder:"Enter The Sms Cost",style:{borderColor:p?r("sms_Cost",p)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>S(s.target.value)}),p?r("sms_Cost",p)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})}),e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Access Key"}),e.jsx(n,{type:"text",id:"exampleFormControlInput1",placeholder:"Enter Access Key",style:{borderColor:m?r("accessKey",m)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>_(s.target.value)}),m?r("accessKey",m)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})})]}),e.jsxs(j,{children:[e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Api Key"}),e.jsx(n,{type:"text",id:"exampleFormControlInput1",placeholder:"Enter Api Key",style:{borderColor:x?r("apiKey",x)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>w(s.target.value)}),x?r("apiKey",x)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})}),e.jsx(t,{children:e.jsxs("div",{className:"mb-3",children:[e.jsx(o,{htmlFor:"exampleFormControlInput1",children:"Client Id"}),e.jsx(n,{type:"text",id:"exampleFormControlInput1",placeholder:"Enter ClientId",style:{borderColor:c?r("clientId",c)?"rgba(71, 71, 212,0.6)":"red":"rgba(71, 71, 212,0.6)"},onChange:s=>F(s.target.value)}),c?r("clientId",c)?e.jsx("span",{}):e.jsx("span",{style:{marginLeft:"10px",color:"red"},children:"Incorrect"}):e.jsx("span",{})]})})]}),e.jsx("div",{className:"col-auto",style:{width:"40%",paddingTop:"20px",margin:"0px auto"},children:E?e.jsxs(v,{color:"success",type:"submit",className:"mb-3",disabled:!0,style:{width:"100%",margin:"0 auto"},children:[e.jsx(R,{as:"span",size:"sm"})," Uploading Data ..."]}):e.jsx(v,{color:"primary",type:"submit",className:"mb-3",style:{width:"100%",margin:"0 auto"},children:"CREATE"})})]})]})})})})})}export{J as default};
