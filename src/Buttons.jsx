import React from "react";

export default function Buttons({ img }) {
  return (
    <div 
      style={{
        position: 'relative',
        width: '50px',  // Button width
        height: '50px', // Button height
      }}
    >
      <button 
        style={{
          width: '100%',  
          height: '100%', 
          padding: '0',
          border: 'none',
          borderRadius: '50%', 
          overflow: 'hidden',
          backgroundColor: 'gray', // Set background color to gray
        }}
      >
        <img 
          src={img} 
          alt="icon" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </button>
    </div>
  );
}
