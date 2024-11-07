import React from "react";

export default function DownArrow() {
  const arrowStyle = {
    position: 'absolute',
    top: 'calc(100vh - 60px)',
    left: 'calc(50% - 14px)',
    width: '0',
    height: '30px',
    border: '2px solid white',
    borderRadius: '2px',
    animation: 'jumpInfinite 1.5s infinite',
  };

  const arrowAfterStyle = {
    content: '""',
    position: 'absolute',
    top: '12px',
    left: '-10px',
    width: '16px',
    height: '16px',
    borderBottom: '4px solid white',
    borderRight: '4px solid white',
    borderRadius: '4px',
    transform: 'rotateZ(45deg)',
  };

  return (
    <>
      <style>
        {`
          @keyframes jumpInfinite {
            0% { margin-top: 0; }
            50% { margin-top: 20px; }
            100% { margin-top: 0; }
          }
        `}
      </style>
      <div style={arrowStyle}>
        <span style={arrowAfterStyle}></span>
      </div>
    </>
  );
}
