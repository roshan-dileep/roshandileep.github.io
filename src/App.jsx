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
      <div 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          flexDirection: 'column',  // Changes layout to column
          gap: '10px'
        }}
      >
        <Buttons img={EmIcon} />
        <Buttons img={GitIcon} />
      </div>

      <Parallax pages={4} ref={ref}>
        <ParallaxLayer offset={0} speed={1}>
          <h2 style={{ textAlign: 'center', color: 'white' }}>Roshan Dileep</h2>
          <p> Intermediate developer at Homestead High School</p>
          <DownArrow />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h2 style={{ marginBottom: '20px', color: 'white' }}>Projects</h2>
            <Projects />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.5}>
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
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;