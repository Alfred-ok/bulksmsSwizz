import{r as n,_ as N,R as v,a as b,c as w,P as d,n as S,j as e}from"./index-DxiAcUCP.js";import{C as p}from"./index.esm-Cy3LKcd6.js";import{a as R,b as T}from"./CContainer-HlgF_dlK.js";import{C as u,a as h}from"./CRow-BRiTm5IC.js";import{C as I,a as P}from"./CCardBody-CGlVQwBB.js";import{C as E}from"./CForm-DJgMOtbZ.js";import{C as l,a as x}from"./CInputGroupText-COP0V_2c.js";import{c as U,a as k}from"./cil-user-Dlmw-Gem.js";import{C}from"./CFormInput-BveaeGyj.js";import{C as G}from"./CFormSelect-tuFcfyUE.js";import"./CFormControlWrapper-BYq7y8h4.js";var m=n.forwardRef(function(r,i){var o=r.children,c=r.className,t=N(r,["children","className"]);return v.createElement("div",b({className:w("card-group",c)},t,{ref:i}),o)});m.propTypes={children:d.node,className:d.string};m.displayName="CCardGroup";const J=()=>{const[r,i]=n.useState(""),[o,c]=n.useState(""),[t,j]=n.useState(""),f=S(),g=async s=>{s.preventDefault();try{const a=await fetch("https://wazimobile-sms-backend.onrender.com/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:o,role:t})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const y=await a.json();console.log(y)}catch(a){console.error("There was a problem with the fetch operation:",a)}f("/login")};return e.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:e.jsx(R,{children:e.jsx(u,{className:"justify-content-center",children:e.jsx(h,{md:8,children:e.jsx(m,{children:e.jsx(I,{className:"p-4",children:e.jsx(P,{children:e.jsxs(E,{onSubmit:g,children:[e.jsx("h1",{children:"Login"}),e.jsx("p",{className:"text-body-secondary",children:"Sign In to your account"}),e.jsxs(l,{className:"mb-3",children:[e.jsx(x,{children:e.jsx(p,{icon:U})}),e.jsx(C,{placeholder:"Username",autoComplete:"username",value:r,onChange:s=>i(s.target.value),required:!0})]}),e.jsxs(l,{className:"mb-4",children:[e.jsx(x,{children:e.jsx(p,{icon:k})}),e.jsx(C,{type:"password",placeholder:"Password",autoComplete:"current-password",value:o,onChange:s=>c(s.target.value),required:!0})]}),e.jsx(l,{className:"mb-4",children:e.jsxs(G,{"aria-label":"Small select example",value:t,onChange:s=>j(s.target.value),required:!0,children:[e.jsx("option",{value:"",children:"Choose Your Role"}),e.jsx("option",{value:"USER",children:"User"}),e.jsx("option",{value:"ADMIN",children:"Admin"})]})}),e.jsx(u,{children:e.jsx(h,{xs:6,children:e.jsx(T,{color:"primary",className:"px-4",type:"submit",children:"Login"})})})]})})})})})})})})};export{J as default};