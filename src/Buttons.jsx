import React from "react";

export default function Buttons({ img, link }) {
    return (
        <div 
            style={{
                position: "relative",
                width: "60px", // Button width
                height: "60px", // Button height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                onClick={() => window.open(link, "_blank")} // Open the link in a new tab
                style={{
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    border: "none",
                    borderRadius: "50%",
                    overflow: "hidden",
                    backgroundColor: "white", // White background
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
                    transition: "transform 0.2s ease, background-color 0.2s ease",
                    cursor: "pointer", // Add pointer cursor for better UX
                }}
                className="buttonHover"
            >
                <img
                    src={img}
                    alt="icon"
                    style={{
                        width: "70%",
                        height: "70%",
                        objectFit: "cover",
                    }}
                />
            </button>
            <style>
                {`
                    .buttonHover:hover {
                        transform: scale(1.2); /* Slightly enlarge on hover */
                        background-color: #f0f0f0; /* Light gray background on hover */
                    }

                    .buttonHover:active {
                        transform: scale(1); /* Reset size when clicked */
                        background-color: #e0e0e0; /* Slightly darker gray when active */
                    }
                `}
            </style>
        </div>
    );
}
