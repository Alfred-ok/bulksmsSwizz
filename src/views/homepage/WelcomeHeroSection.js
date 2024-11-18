import React from 'react'
import "./welcome.css"
import bgImg from '../../assets/images/man-coat-smiling-from-work-reads-message-smartphone-screen-copy-space-concept.jpg';


function WelcomeHeroSection() {

  return (
    <div>
    <div class="banner-area banner-3" 
        style={{
            backgroundImage: `url(${bgImg})`, 
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backgroundBlendMode:"multiply",  
            backgroundPosition:"center", 
            color:"#fff" }}>
        
        <div class="d-table">
            <div class="d-table-cell">
            <div class="container">
                <div class="row">
                <div class="col-lg-8 m-auto text-center col-sm-12 col-md-12">
                    <div class="banner-content content-padding">
                    <h5 class="subtitle" >Messaging Platform</h5>
                    <h1 class="banner-title" style={{color:"#fff"}} >Reach Your Audience Instantly with Powerful Bulk SMS Solutions</h1>
                    <p>Deliver personalized, time-sensitive messages at scale. Drive engagement, boost conversions, and build lasting relationships.</p>

                    <a  class="btn btn-white btn-circled" href="/login">Login</a>
                    <a href="#about" class="btn btn-hero btn-circled">Find out more</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WelcomeHeroSection