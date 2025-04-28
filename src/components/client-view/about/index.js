"use client";

import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutMeImage from "../../../assets/about-image.png";

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

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export default function ClientAboutView({ data }) {
  const setVariants = useMemo(() => variants(), []);

  const aboutDataInfo = [
    {
      label: "Clients",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];

  const headingText = "Why Hire Me For Your Next Project ?";

  return (
    <div
      className="max-w-screen-xl mt-24 mb-10 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      {/* Stats Section */}
      <div className="w-full flex">
        <AnimationWrapper className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 bg-white">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 shadow-md transition-all duration-300"
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <p className="text-4xl lg:text-5xl text-black font-extrabold">
                {infoItem.value}+
              </p>
              <p className="text-lg lg:text-2xl font-bold text-blue-600 mt-2">
                {infoItem.label}
              </p>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>

      {/* Heading Section */}
      <AnimationWrapper className="pt-12">
        <div className="flex flex-col justify-center items-center text-center px-4">
          <h1 className="mb-6 text-3xl lg:text-5xl font-extrabold leading-tight">
            {headingText.split(" ").map((item, index) => (
              <span
                key={index}
                className={`${
                  index === 6 ? "text-blue-600" : "text-black"
                } font-mono`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
          <p className="max-w-3xl text-gray-600 text-md lg:text-lg mt-4 leading-relaxed border-l-4 pl-6 border-blue-600 font-mono">
            {data?.aboutme}
          </p>
        </div>
      </AnimationWrapper>

      {/* About Image and Skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
        {/* About Image */}
        <AnimationWrapper>
          <motion.div variants={setVariants} className="w-full">
            <Image
              src={aboutMeImage}
              alt="About Me"
              layout="responsive"
              height={414}
              width={508}
              className="rounded-xl shadow-lg"
              quality={100}
            />
          </motion.div>
        </AnimationWrapper>

        {/* Skills Grid */}
        <AnimationWrapper className="flex items-center">
          <motion.div
            variants={setVariants}
            className="grid gap-4 grid-cols-2 lg:grid-cols-3 w-full"
          >
            {data?.skills.split(",").map((skill, index) => (
              <motion.div
                className="flex justify-center"
                variants={skillItemVariant}
                key={index}
              >
                <button className="w-[140px] text-center py-2 px-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300">
                  {skill}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}
