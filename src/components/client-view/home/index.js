"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/option3.png";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  { id: "facebook", icon: <FaFacebookF className="w-6 h-6" /> },
  { id: "twitter", icon: <FaTwitter className="w-6 h-6" /> },
  { id: "linkedin", icon: <FaLinkedinIn className="w-6 h-6" /> },
  { id: "instagram", icon: <FaInstagram className="w-6 h-6" /> },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div
      className="max-w-screen-xl mt-24 px-6 md:px-12 xl:px-20 mx-auto font-sans"
      id="home"
    >
      <AnimationWrapper>
        <motion.div
          className="grid md:grid-cols-2 items-center gap-12"
          variants={setVariants}
        >
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight text-black">
              {data && data.length
                ? data[0]?.heading.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-blue-700"
                          : "text-black"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>

            <p className="w-full text-[#333] text-base md:text-lg leading-relaxed mt-6 mb-8 text-justify">
              {data && data.length ? data[0]?.summary : null}
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 2,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: 0, borderRadius: "100%" }}
                  className="p-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <motion.div ref={containerRef} className="flex justify-center md:justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-blue-700 rounded-lg overflow-hidden"
            >
              <div className="absolute w-full h-full top-4 left-4 rounded-lg border-4 border-black"></div>
              <Image
                src={aiImage}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
