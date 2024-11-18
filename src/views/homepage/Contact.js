import { cilContact, cilEnvelopeClosed, cilGem } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import classNames from 'classnames'
import React from 'react'

function Contact() {
  return (
   
<section id="pricing" class="section-padding bg-main bg-dark" style={{marginBottom:"-30px"}}> 
  <div class="container">
    <div class="row" style={{backgroundColor:"rgba(0,0,0,0.2)", paddingTop:"40px", borderRadius:"20px"}}>
      <div class="col-lg-12 col-sm-12 m-auto">
        <div class="section-heading" >
          <h4 class="section-title" style={{color:"#fff"}}>Let's Get In Touch!</h4>
          <p style={{color:"#fff"}}>Got questions or ready to supercharge your communication with bulk SMS? 
          We're here to help! Reach out to us through any of the methods below, 
          and our team will get back to you promptly.</p>
        </div>
      </div>
    </div>

    <div class="row" style={{display:"flex", justifyContent:"center", alignItems:"center", color:"#fff"}}>


      <div class="col-lg-4 col-sm-6" style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
          <div class="price-header">
            <CIcon icon={cilContact} size="3xl"/>
            <h4 style={{color:"#fff"}}>Phone Number</h4>
            <h5 style={{color:"#fff"}}>+254719119560</h5>
            <h5 style={{color:"#fff"}}>+254722781109</h5>
          </div>
        
      </div>
      


      <div class="col-lg-4 col-sm-6" style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
        
          <div class="price-header">
            <CIcon icon={cilEnvelopeClosed} size="3xl"/>

            <h4 style={{color:"#fff"}}>Email</h4>
            <h5 style={{color:"#fff"}}>solutions@wazi.co.ke</h5>
          </div>
        
      </div>




    </div>
  </div>
</section>

  )
}

export default Contact