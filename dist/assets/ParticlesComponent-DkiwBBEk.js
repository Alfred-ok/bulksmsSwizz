import{r as a,j as t}from"./index-DxiAcUCP.js";const p=({children:r})=>{const l=a.useRef(null),n=a.useRef(null),o=a.useRef(null);return a.useEffect(()=>{const s=document.createElement("script");return s.src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",s.onload=()=>{window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});const e=new window.Stats;e.showPanel(0),e.dom.style.position="absolute",e.dom.style.left="0px",e.dom.style.top="0px",n.current.appendChild(e.dom);const i=()=>{e.begin(),e.end(),window.pJSDom&&window.pJSDom[0].pJS.particles&&window.pJSDom[0].pJS.particles.array&&(o.current.innerText=window.pJSDom[0].pJS.particles.array.length),requestAnimationFrame(i)};requestAnimationFrame(i)},document.body.appendChild(s),()=>{document.body.removeChild(s)}},[]),t.jsxs("div",{children:[t.jsx("div",{id:"particles-js",ref:l,style:c}),t.jsx("div",{className:"count-particles",children:t.jsx("span",{className:"js-count-particles",ref:o,children:"--"})}),t.jsx("div",{id:"stats",ref:n}),r]})},c={position:"absolute",width:"100%",height:"100%",backgroundColor:"#3317b6",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"50% 50%"};export{p as default};
