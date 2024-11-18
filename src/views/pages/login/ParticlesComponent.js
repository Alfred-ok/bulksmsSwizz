import React, { useEffect, useRef } from 'react';

const ParticlesComponent = ({children}) => {
  const particlesRef = useRef(null);
  const statsRef = useRef(null);
  const countParticlesRef = useRef(null);

  useEffect(() => {
    // Load particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
      });
      
      // Stats.js initialization
      const stats = new window.Stats();
      stats.showPanel(0);
      stats.dom.style.position = 'absolute';
      stats.dom.style.left = '0px';
      stats.dom.style.top = '0px';
      statsRef.current.appendChild(stats.dom);

      const updateStats = () => {
        stats.begin();
        stats.end();
        if (
          window.pJSDom &&
          window.pJSDom[0].pJS.particles &&
          window.pJSDom[0].pJS.particles.array
        ) {
          countParticlesRef.current.innerText =
            window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(updateStats);
      };

      requestAnimationFrame(updateStats);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div>
      <div id="particles-js" ref={particlesRef} style={particlesStyle} >
      </div>
      <div className="count-particles">
        <span className="js-count-particles" ref={countParticlesRef}>--</span>
        
      </div>
      <div id="stats" ref={statsRef}></div>
      {children}
    </div>
  );
};

// Inline styles for particles container
const particlesStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: '#3317b6',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
};

export default ParticlesComponent;
