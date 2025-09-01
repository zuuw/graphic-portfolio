"use client";

import { motion } from 'framer-motion';
import React from 'react'

function FramerHeader() {
    
    const images = [
    "/hicm/Rect1.png",
    "/hicm/Head1.png",
  ]; 

    const groups = [
  ["/hicm/hello-h.png", "/hicm/hello-e.png", "/hicm/hello-l.png", "/hicm/hello-l2.png", "/hicm/hello-o.png", "/hicm/hello-end.png"],
  ["/hicm/im-i.png", "/hicm/im-m.png", "/hicm/cody-c.png", "/hicm/cody-o.png", "/hicm/cody-dd.png", "/hicm/cody-yy.png", "/hicm/mcl-m.png", "/hicm/mcl-c.png", "/hicm/mcl-l.png", "/hicm/mcl-e.png", "/hicm/mcl-o.png", "/hicm/mcl-d.png", "/hicm/mcl-end.png"],
];

    const groupDelays = [0,];


  return (
     <div className="flex justify-center">
      <div className="relative w-[1500px] h-[600px]">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
           transition={{
    delay: i === 5 ? 2 : i * 0.3, // image 6 gets a big delay
    duration: i === 10 ? 1.5 : 0.5, // image 11 animates slower
    ease: "easeOut",
            }}
          />
        ))}
        {groups.map((group, gIndex) =>
  group.map((src, i) => (
    <motion.img
      key={src}
      src={src}
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: groupDelays[gIndex] + i * 0.3, 
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  ))
)}
      </div>
    </div> 
  )
}

export default FramerHeader

// "/hicm/hello-h.png",
//     "/hicm/hello-e.png",
//     "/hicm/hello-l.png",
//     "/hicm/hello-l2.png",
//     "/hicm/hello-o.png",
//     "/hicm/hello-end.png",
//     "/hicm/im-i.png",
//     "/hicm/im-m.png",
//     "/hicm/cody-c.png",
//     "/hicm/cody-o.png",
//     "/hicm/cody-dd.png",
//     "/hicm/cody-yy.png",
//     "/hicm/mcl-m.png",
//     "/hicm/mcl-c.png",
//     "/hicm/mcl-l.png",
//     "/hicm/mcl-e.png",
//     "/hicm/mcl-o.png",
//     "/hicm/mcl-d.png",
//     "/hicm/mcl-end.png",