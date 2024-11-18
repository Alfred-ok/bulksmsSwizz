import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import bgImg  from  '../assets/images/Hovia-Wallpaper-Murals.png'

const DefaultLayout = () => {
  return (
    
    <div style={{
        backgroundImage: `url(${bgImg})`,
        backgroundColor: "rgba(204, 211, 223, 0.6)", //'#ccd3df',
       // backgroundBlendMode:"screen",
       // backgroundImage: "url('src/assets/images/Hovia-Consciously-Designed-Wallpaper-and-Murals.jpeg')",
         // Semi-transparent dominant color
        backgroundBlendMode: "saturation",  // Use 'overlay' or 'multiply' for strong color dominance ///color//saturation
        backgroundPosition: "center", // Center the image
        }}>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1" style={{zIndex:"4"}}>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
    
  )
}


export default DefaultLayout


