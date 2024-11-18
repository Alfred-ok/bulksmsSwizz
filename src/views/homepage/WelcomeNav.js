import React from 'react'
import { useState } from "react";
import "./welcome.css"

function WelcomeNav() {

    const [navBg, setNavBg] = useState(false);

    window.addEventListener("scroll", ()=>{
        if(window.scrollY >= 56){
        setNavBg(true);
        }else{
        setNavBg(false);
        }
    })
  return (
    <div>
        <nav className= { navBg ? "navbar navbar-expand-lg fixed-top trans-navigation header-white" : "navbar navbar-expand-lg fixed-top trans-navigation"} >
  <div class="container">
    <a class="navbar-brand" href="index.html">
       <h4 style={{color:"#fff"}}>WAZI MOBILE</h4>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        <i class="fa fa-bars"></i>
      </span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="mainNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link smoth-scroll" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link smoth-scroll" href="#service-head">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link smoth-scroll" href="#pricing">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link smoth-scroll" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default WelcomeNav