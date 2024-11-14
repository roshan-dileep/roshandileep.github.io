import React, { useState } from "react";

export default function TechStack({ img, descriptor }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* Tech Stack Button Section */}
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Button to toggle the text */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        padding: '10px 20px', // Increase padding for a larger button
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        borderRadius: '180px',
                        cursor: 'pointer',
                        width: '80px', // Increased width
                        height: '80px', // Increased height
                        display: 'flex', // Use flex to center the image inside the button
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '18px', // Optional: increase font size if you want bigger text
                    }}
                >
                    <img
                        src={img}
                        alt="icon"
                        style={{
                            width: "40px", // Increase the size of the image inside the button
                            height: "40px", // Increase the size of the image inside the button
                            objectFit: "cover"
                        }} 
                    />
                </button>
            </div>

            {/* Descriptor Text with Toggle */}
            <div
                style={{
                    marginTop: '10px', // Space between button and text
                    whiteSpace: 'nowrap',
                }}
            >
                {isOpen && (
                    <p style={{ margin: '0', color: 'white' }}>
                        {descriptor}
                    </p>
                )}
            </div>
        </div>
    );
}
