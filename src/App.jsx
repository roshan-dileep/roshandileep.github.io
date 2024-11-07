import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./Projects";
import Buttons from "./Buttons";
import EmIcon from  "./assets/emailicon.png"
import GitIcon from "./assets/githubicon.png"
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
          gap: '10px' // Space between buttons
        }}
      >
        <Buttons img={EmIcon}/>
        <Buttons img={GitIcon} />
      </div>

      <Parallax pages={4} ref={ref}>
        <ParallaxLayer offset={0} speed={1}>
          <h2>Welcome to my website</h2>
          <DownArrow />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <div style={{ textAlign: 'center', paddingTop: '50px' }}>
            <h2 style={{ marginBottom: '20px' }}>Projects</h2>
            <Projects />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
