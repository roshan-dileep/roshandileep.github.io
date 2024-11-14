import { useScroll, motion } from "framer-motion";
import React, { useState } from "react";

export default function TechStack({ img, descriptor }) {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll(); // Correct usage of `useScroll`

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column', // Stack items vertically
                alignItems: 'center',
                textAlign: 'center'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    padding: '5px 10px', // Reduced padding for a smaller button
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'none',
                    borderRadius: '180px',
                    cursor: 'pointer',
                    width: '100px',
                    height: '100px',
                    display: 'flex', // Use flex to center the image inside the button
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={img}
                    alt="icon"
                    style={{
                        width: "70px",
                        height: "60px",
                        objectFit: "cover"
                    }}
                />
            </button>
            <div
                style={{
                    marginTop: '10px', // Space between button and text
                    transition: 'max-width 0.5s ease',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    maxWidth: isOpen ? '100%' : '0',
                }}
            >
                {isOpen && (
                    <motion.p
                        style={{ margin: '0', color: 'white' }}
                        initial={{ opacity: 0 }} // Start with the text hidden
                        animate={{ opacity: scrollYProgress.get() }} // Animate based on scroll
                        transition={{ duration: 0.5 }}
                    >
                        {descriptor}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
