import React, { useRef } from "react";
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

  return (
    <div>
      {/* Positioning of buttons */}
      <div 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column', // Stack buttons vertically
          gap: '10px',
        }}
      >
        <Buttons img={EmIcon} />
        <Buttons img={GitIcon} />
      </div>

      <Parallax pages={4} ref={ref}>
        {/* First Parallax Layer */}
        <ParallaxLayer offset={0} speed={1}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Roshan Dileep</h2>
          <p style={{ textAlign: 'center', color: 'white' }}>Intermediate developer at Homestead High School</p>
          <DownArrow />
        </ParallaxLayer>

        {/* Second Parallax Layer - Projects Section */}
        <ParallaxLayer offset={1} speed={0.5}>
          <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h2 style={{ marginBottom: '20px', color: 'white' }}>Projects</h2>
            <Projects />
          </div>
        </ParallaxLayer>

        {/* Third Parallax Layer - Tech Stack Section */}
        <ParallaxLayer offset={2} speed={0.5}>
          <div style={{
              display: 'flex',
              flexDirection: 'column', // Stack the TechStack components vertically
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              gap: '20px', // Add space between TechStack components
          }}>
            <h2 style={{ textAlign: 'center', color: 'white' }}>Tech Stack</h2>
            <TechStack
              img={reactbefore}
              descriptor={"Built basic websites with React"}
            />
            <TechStack
              img={pythonbefore}
              descriptor={"Python development and scripting"}
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
