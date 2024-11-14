import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./ProjectsSection/Projects";
import Buttons from "./Buttons";
import TechStack from "./TechStack";
import EmIcon from "./assets/emailicon.png";
import GitIcon from "./assets/githubicon.png";
import reactbefore from "./assets/reactbefore.png";
import pythonbefore from "./assets/pythonbefore.png";
import DownArrow from "./DownArrow";

function App() {
  const ref = useRef();

  // Function to limit scroll speed
  useEffect(() => {
    let lastTime = 0;
    const throttleScroll = (event) => {
      const now = Date.now();
      if (now - lastTime < 70) { // Limit scroll events to every 100ms
        event.preventDefault();
        return;
      }
      lastTime = now;
    };

    window.addEventListener("wheel", throttleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", throttleScroll);
    };
  }, []);

  return (
    <div>
      <div 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',  // Changes layout to column
        }}
      >
        <Buttons img={EmIcon} />
        <Buttons img={GitIcon} />
      </div>

      {/* Enable smooth scrolling across the entire page */}
      <style>
        {`
          html {
            scroll-behavior: smooth; /* Smooth scrolling */
          }
        `}
      </style>

      <Parallax pages={4} ref={ref}>
        {/* Adjust speed to control scroll movement */}
        <ParallaxLayer offset={0} speed={0.3}> {/* Slow down the scroll speed */}
          <h2 style={{ textAlign: 'center', color: 'white' }}>Roshan Dileep</h2>
          <DownArrow />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2}> {/* Even slower for the next layer */}
          <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h2 style={{ marginBottom: '20px', color: 'white' }}>Projects</h2>
            <Projects />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1}> {/* Slowest for this layer */}
          <div style={{
              display: 'flex',
              flexDirection: 'column', // Aligns content vertically
              alignItems: 'center',
              height: '100vh'
          }}>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Tech Stack</h2>
            <TechStack
              img={reactbefore}
              descriptor={"Built basic websites with React"}
            />
            <TechStack
              img={pythonbefore} 
              descriptor={"Python development and scripting"}
              delays={1}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
