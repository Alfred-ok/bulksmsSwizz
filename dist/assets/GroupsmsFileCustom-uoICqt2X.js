import{e as U,r as o,j as e}from"./index-C301rl4l.js";import{C as O}from"./index.esm-DfaUp9eW.js";import{S as c}from"./sweetalert2.esm.all-DOYwHpwi.js";import{r as H,u as z}from"./xlsx-DG2X6oDA.js";import{a as G,b as J,c as u,d as b}from"./CRow-DzvM-Fku.js";import{C as L,a as W}from"./CCardBody-BB8X-jUM.js";import{C as q,c as K}from"./DefaultLayout-D85aDnQc.js";import{C as Q}from"./CAlert-DXt3K87V.js";import{C as V}from"./CForm-DyX8Mp35.js";import{C as y}from"./CFormSelect-CWPKjNEb.js";import{C as X}from"./CFormInput-VSLTUyno.js";import{C as Y}from"./CFormTextarea-hccMW2jx.js";function he(){const g=U.get("groupId"),[v,F]=o.useState([]),[p,N]=o.useState("");o.useState("");const[Z,w]=o.useState([]),[i,I]=o.useState([]),[E,D]=o.useState([]),[x,$]=o.useState(""),[d,C]=o.useState(""),k=s=>{const r=s.target.files[0];if(r){const a=new FileReader;a.onload=t=>{const l=new Uint8Array(t.target.result),n=H(l,{type:"array"}),m=n.SheetNames[0],f=n.Sheets[m],h=z.sheet_to_json(f,{header:1});if(h.length){const S=h[0],T=h.slice(1).map(A=>S.reduce((j,B,_)=>(j[B]=A[_]||"",j),{}));I(S),w(h.slice(1)),D(T)}},a.readAsArrayBuffer(r)}},M=s=>{if(s){const r=`{${s}}`;d.includes(r)||C(a=>`${a}${a?" ":""}${r}`.trim())}},P=s=>{$(s)},R=async s=>{if(s.preventDefault(),!p||!x||!d){c.fire({title:"Error",text:"Please select a sender ID, phone column, and compose a message.",icon:"error"});return}const r=E.map(t=>{const l=t[x];if(!l)return null;let n=d;return i.forEach(m=>{const f=`{${m}}`;n=n.replace(new RegExp(f,"g"),t[m]||"")}),{phoneNumber:l,message:n}}).filter(Boolean);if(r.length===0){c.fire({title:"Error",text:"No valid phone numbers found.",icon:"error"});return}const a={code:p,phoneNumber:r.map(t=>t.phoneNumber),message:r.map(t=>t.message)};console.log(a);try{const t=await fetch("https://81c9-69-197-145-100.ngrok-free.app/group-sms-fileCustom",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),l=await t.text();if(console.log(l),l=="Successfully processed all messages."?c.fire({title:"Success",text:"Messages sent successfully!",icon:"success"}):c.fire({title:"Error",text:"Failed to send messages.",icon:"error"}),t.ok)c.fire({title:"Success",text:"Messages sent successfully!",icon:"success"});else{const n=await t.json();c.fire({title:"Error",text:n.message||"Failed to send messages.",icon:"error"})}}catch(t){console.error("Submission error:",t),c.fire({title:"Error",text:"An error occurred while sending the messages.",icon:"error"})}};return o.useEffect(()=>{fetch(`https://81c9-69-197-145-100.ngrok-free.app/org_group_id/${g}`).then(s=>s.json()).then(s=>F(s)).catch(s=>console.error("Fetch error:",s))},[g]),e.jsx(e.Fragment,{children:e.jsx(G,{className:"justify-content-md-center",children:e.jsx(J,{xs:9,children:e.jsx(L,{className:"mb-4",style:{boxShadow:"0px 15px 34px 0px rgba(0,0,0,0.2)"},children:e.jsxs(W,{children:[e.jsx(q,{children:e.jsxs(Q,{color:"primary",variant:"solid",className:"d-flex align-items-center",xs:10,children:[e.jsx(O,{icon:K,className:"flex-shrink-0 me-2",width:34,height:34}),e.jsx("div",{children:e.jsx("h3",{children:"Send SMS"})})]})}),e.jsxs(V,{onSubmit:R,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{htmlFor:"senderIdSelect",children:"Select Sender ID"}),e.jsxs(y,{id:"senderIdSelect",value:p,onChange:s=>N(s.target.value),style:{borderColor:"rgba(71, 71, 212,0.6)"},children:[e.jsx("option",{value:"",children:"Select Sender ID"}),v.map((s,r)=>e.jsx("option",{value:s.org_Code,children:s.url},r))]})]}),e.jsx("div",{className:"mb-3",children:e.jsx(X,{type:"file",id:"formFile",label:"Upload Excel File",onChange:k,style:{borderColor:"rgba(71, 71, 212,0.6)"}})}),i.length>0&&e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{children:"Select a Column for Phone Numbers"}),e.jsxs(y,{id:"phoneColumnSelect",value:x,onChange:s=>P(s.target.value),style:{borderColor:"rgba(71, 71, 212,0.6)"},children:[e.jsx("option",{value:"",children:"Select a Column"}),i.map((s,r)=>e.jsx("option",{value:s,children:s},r))]})]}),i.length>0&&e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{children:"Select Columns to Include in the Message"}),e.jsx("div",{className:"d-flex flex-wrap gap-2",children:i.map((s,r)=>e.jsx(b,{color:"primary",onClick:()=>M(s),style:{minWidth:"120px"},children:s},r))})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(u,{htmlFor:"messageInput",children:"Message"}),e.jsx(Y,{id:"messageInput",rows:6,value:d,onChange:s=>C(s.target.value),style:{borderColor:"rgba(71, 71, 212,0.6)"}})]}),e.jsx(b,{color:"primary",type:"submit",children:"SUBMIT"})]})]})})})})})}export{he as default};
