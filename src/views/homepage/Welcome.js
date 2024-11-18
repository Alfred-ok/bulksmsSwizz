import React from 'react'
const Aboutmessaging= React.lazy(()=>import('./Aboutmessaging'))
const Servicemessaging= React.lazy(()=>import('./Servicemessaging'))
const Contact = React.lazy(()=>import('./Contact'))
const WelcomeNav = React.lazy(()=>import('./WelcomeNav'))
const WelcomeHeroSection = React.lazy(()=>import('./WelcomeHeroSection'))


function Welcome() {
  return (
    <div data-spy="scroll" data-target="#mainNav">
      {/** combines nav and banner */}
      <WelcomeNav/>
      <WelcomeHeroSection/>
      <Aboutmessaging/>
      <Servicemessaging/>
      <Contact/>
    </div>

  )
}

export default Welcome