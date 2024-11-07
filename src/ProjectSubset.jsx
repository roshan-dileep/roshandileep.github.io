import React from "react";

export default function ProjComponent({descriptor,heading}) {
  return (
    <div 
      style={{
        width: '100%',           // Set the width of the square
        height: '100%',          // Set the height of the square
        backgroundColor: 'white', // Set background color to white
        borderRadius: '15px',     // Rounded corners
        display: 'flex',          // Centering text
        alignItems: 'center',     // Center vertically
        justifyContent: 'center', // Center horizontally
        color: 'black',           // Text color
        fontSize: '1.5rem'        // Adjust font size as needed
      }}
    >
        <h1>{heading}</h1>
        <p>{descriptor}</p>
    </div>
  );
}
