import{r as E,_ as I,R as i,a as t,c as L,P as s}from"./index-C301rl4l.js";import{f as n}from"./CRow-DzvM-Fku.js";var m=E.forwardRef(function(e,p){var l,v=e.children,k=e.className,g=e.feedback,y=e.feedbackInvalid,N=e.feedbackValid,u=e.floatingClassName,C=e.floatingLabel,z=e.htmlSize,d=e.id,r=e.invalid,h=e.label,c=e.options,b=e.size,F=e.text,x=e.tooltipFeedback,o=e.valid,f=I(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","htmlSize","id","invalid","label","options","size","text","tooltipFeedback","valid"]);return i.createElement(n,{describedby:f["aria-describedby"],feedback:g,feedbackInvalid:y,feedbackValid:N,floatingClassName:u,floatingLabel:C,id:d,invalid:r,label:h,text:F,tooltipFeedback:x,valid:o},i.createElement("select",t({id:d,className:L("form-select",(l={},l["form-select-".concat(b)]=b,l["is-invalid"]=r,l["is-valid"]=o,l),k),size:z},f,{ref:p}),c?c.map(function(a,S){return i.createElement("option",t({},typeof a=="object"&&a.disabled&&{disabled:a.disabled},typeof a=="object"&&a.value!==void 0&&{value:a.value},{key:S}),typeof a=="string"?a:a.label)}):v))});m.propTypes=t({className:s.string,htmlSize:s.number,options:s.array},n.propTypes);m.displayName="CFormSelect";export{m as C};