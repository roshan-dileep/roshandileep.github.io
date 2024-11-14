import React from "react";
import { motion } from "framer-motion";
import ProjComponent from "./ProjectSubset";

export default function Projects() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  // Centers each ProjComponent horizontally
        textAlign: 'center',
        gap: '20px', // Space between ProjComponent instances
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          width: '300px',  // Set a fixed width
        }}
      >
        <ProjComponent
          descriptor={"Description text here"}
          heading={"Hello"}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        style={{
          width: '300px',  // Same fixed width
        }}
      >
        <ProjComponent
          descriptor={"Another description text here"}
          heading={"Hello"}
        />
      </motion.div>
    </div>
  );
}
