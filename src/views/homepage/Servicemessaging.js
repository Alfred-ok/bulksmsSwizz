import React from 'react'
import { cilCommentBubble, cilGem, cilPaperPlane } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

function Servicemessaging() {
  return (
    <div>
        <section id="service-head" class=" bg-feature">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 col-sm-12 m-auto">
                <div class="section-heading text-white">
                <h4 class="section-title">BULK SMS TOUR</h4>
                <p>Communicate instantly with your customers through the Uwazii MOBILE Bulk SMS platform. 
                Our Bulk SMS application has been designed to give you the simplest, easiest, sleekest, 
                and most powerful approach on Bulk SMS messaging in the cloud. 
                The user-friendly interface allows you to easily set up new Bulk SMS broadcasts in seconds and manage multiple Bulk SMS campaigns from one interface supporting thousands of Bulk SMS messages.
                </p>
                </div>
            </div>
            </div>
        </div>
        </section>



        <section id="service">
        <div class="container">
            <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="service-box">
                <div class="service-img-icon">
                    <CIcon icon={cilGem} size="3xl"/>
                </div>
                <div class="service-inner">
                    <h4>CUSTOM SENDER</h4>
                    <p>
                    Communicate with your customers using a registered sender ID. 
                    Distinguish yourself from your competitors and build your brand rapidly.
                    </p>
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="service-box ">
                <div class="service-img-icon">
                    <CIcon icon={cilPaperPlane} size="3xl"/>
                </div>
                <div class="service-inner">
                    <h4>REST API</h4>
                    <p>
                    Leverage our powerful REST API to connect to the infrastructure driving the SMS industry, 
                    giving you instant access to billions of subscribers.
                    </p>
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
                <div class="service-box">
                <div class="service-img-icon">
                    <CIcon icon={cilCommentBubble} size="3xl"/>
                </div>
                <div class="service-inner">
                    <h4>WEB SMS</h4>
                    <p>
                    Connect via our web interface and give your business access to all of our platform’s features, 
                    including messaging and analytics. CONTACT
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Servicemessaging