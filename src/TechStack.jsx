import { motion } from "framer-motion";
import React from "react";

export default function TechStack({ img, descriptor, delays }) {
    // Split the descriptor into individual characters for typewriter effect
    const characters = descriptor.split('');

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* Circular Image - No animations */}
            <div
                style={{
                    width: '100px', // Circle size
                    height: '100px', // Circle size
                    borderRadius: '50%', // Make the div circular
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden', // Ensure the image stays within the circle
                    backgroundColor: 'white', // Background color of the circle
                }}
            >
                <img
                    src={img}
                    alt="icon"
                    style={{
                        width: "70px", // Image size
                        height: "70px", // Image size (make it fit the circle)
                        objectFit: "cover", // Ensure the image covers the circle area
                    }}
                />
            </div>

            {/* Typing Effect Text Animation */}
            <div
                style={{
                    marginTop: '10px', // Space between the image and text
                    whiteSpace: 'nowrap',
                }}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }} // Start with the text hidden
                        animate={{ opacity: 1 }}  // Fade in each character
                        transition={{
                            duration: 0.03, // Faster speed for typing
                            delay: delays + index * 0.05, // Delay each character by a small amount
                        }}
                        style={{ color: 'white' }}
                    >
                        {char}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
