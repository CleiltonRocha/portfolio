"use client"
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props =  {
    text: string;
}

export function AnimatedTitles(props: Props) {
  
  const words = props.text.split(" ");

  const [ref, inView] = useInView();

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const grayText = ["and", "Recently", "Do", "you", "want"];
  const controls = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start("visible");
    }

  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{ display: "flex" }}
      variants={container}
      initial="hidden"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className={`font-bold text-center mr-3 text-zinc-50 tracking-tighter ${grayText.includes(word) ? 'text-gray-700' : ''}`}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}