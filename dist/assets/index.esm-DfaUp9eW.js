import{r as h,R as c}from"./index-C301rl4l.js";var C={},d=function(){return d=Object.assign||function(i){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=n[t])}return i},d.apply(this,arguments)};function R(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)i.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function z(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _={exports:{}},O,E;function L(){if(E)return O;E=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return O=e,O}var b,P;function U(){if(P)return b;P=1;var e=L();function i(){}function n(){}return n.resetWarningCache=i,b=function(){function r(o,l,y,v,m,g){if(g!==e){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}r.isRequired=r;function s(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:s,element:r,elementType:r,instanceOf:s,node:r,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:n,resetWarningCache:i};return t.PropTypes=t,t},b}_.exports=U()();var V=_.exports,a=z(V),j={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function n(){for(var t="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(t=s(t,r(l)))}return t}function r(t){if(typeof t=="string"||typeof t=="number")return t;if(typeof t!="object")return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var o="";for(var l in t)i.call(t,l)&&t[l]&&(o=s(o,l));return o}function s(t,o){return o?t?t+" "+o:t+o:t}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(j);var k=j.exports,x=z(k),H=function(e){return e.replace(/([-_][a-z0-9])/gi,function(i){return i.toUpperCase()}).replace(/-/gi,"")},I=h.forwardRef(function(e,i){var n,r=e.className,s=e.content,t=e.customClassName,o=e.height,l=e.icon,y=e.name,v=e.size,m=e.title,g=e.use,u=e.width,w=R(e,["className","content","customClassName","height","icon","name","size","title","use","width"]),S=h.useState(0),N=S[0],F=S[1],p=l||s||y;s&&process,y&&process,h.useMemo(function(){return F(N+1)},[p,JSON.stringify(p)]);var W=m?"<title>".concat(m,"</title>"):"",f=h.useMemo(function(){var D=p&&typeof p=="string"&&p.includes("-")?H(p):p;if(Array.isArray(p))return p;if(typeof p=="string"&&c.icons)return c[D]},[N]),q=h.useMemo(function(){return Array.isArray(f)?f[1]||f[0]:f},[N]),M=function(){return Array.isArray(f)&&f.length>1?f[0]:"64 64"}(),B=function(){return w.viewBox||"0 0 ".concat(M)}(),T=t?x(t):x("icon",(n={},n["icon-".concat(v)]=v,n["icon-custom-size"]=o||u,n),r);return c.createElement(c.Fragment,null,g?c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",className:T},o&&{height:o},u&&{width:u},{role:"img","aria-hidden":"true"},w,{ref:i}),c.createElement("use",{href:g})):c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:B,className:T},o&&{height:o},u&&{width:u},{role:"img","aria-hidden":"true",dangerouslySetInnerHTML:{__html:W+q}},w,{ref:i})),m&&c.createElement("span",{className:"visually-hidden"},m))});I.propTypes={className:a.string,content:a.oneOfType([a.array,a.string]),customClassName:a.string,height:a.number,icon:a.oneOfType([a.array,a.string]),name:a.string,size:a.oneOf(["custom","custom-size","sm","lg","xl","xxl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]),title:a.string,use:a.string,viewBox:a.string,width:a.number};I.displayName="CIcon";var A=h.forwardRef(function(e,i){var n,r=e.children,s=e.className,t=e.customClassName,o=e.height,l=e.size,y=e.title,v=e.width,m=R(e,["children","className","customClassName","height","size","title","width"]),g=t?x(t):x("icon",(n={},n["icon-".concat(l)]=l,n["icon-custom-size"]=o||v,n),s);return c.createElement(c.Fragment,null,h.Children.map(r,function(u){if(c.isValidElement(u))return c.cloneElement(u,d({"aria-hidden":!0,className:g,focusable:"false",ref:i,role:"img"},m))}),y&&c.createElement("span",{className:"visually-hidden"},y))});A.propTypes={className:a.string,customClassName:a.string,height:a.number,size:a.oneOf(["custom","custom-size","sm","lg","xl","xxl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"]),title:a.string,width:a.number};A.displayName="CIconSvg";export{I as C};