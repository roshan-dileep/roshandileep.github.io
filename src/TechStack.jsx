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
                {/* Button with hover effect */}
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
                        transition: 'transform 0.3s ease, background-color 0.3s ease', // Smooth hover transitions
                    }}
                    className="hover-button"
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

            {/* Descriptor Text with Reveal Animation */}
            <div
                style={{
                    marginTop: '10px', // Space between button and text
                    overflow: 'hidden', // Hide the text until revealed
                    maxHeight: isOpen ? '100px' : '0', // Smooth height adjustment
                    transition: 'max-height 0.5s ease-in-out',
                }}
            >
                {isOpen && (
                    <p 
                        style={{ 
                            margin: '0', 
                            color: 'white', 
                            animation: isOpen ? 'reveal 1s ease-in-out' : 'none',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden', // Keep text within bounds
                        }}
                    >
                        {descriptor}
                    </p>
                )}
            </div>

            {/* Add styles for hover and keyframes */}
            <style>
                {`
                    @keyframes reveal {
                        0% {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    .hover-button:hover {
                        transform: scale(1.1); /* Enlarge the button slightly */
                        background-color: lightgray; /* Change background color */
                    }
                `}
            </style>
        </div>
    );
}
