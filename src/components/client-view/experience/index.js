"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
};

export default function ClientExperienceAndEducationView({ educationData, experienceData }) {
  return (
    <div
      className="max-w-screen-xl mt-32 mb-16 px-6 sm:px-8 lg:px-16 mx-auto pt-16 font-mono"
      id="experience"
    >
      <div className="flex flex-col lg:flex-row gap-16 w-full">
        
        {/* Experience Section */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          <AnimationWrapper>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl xl:text-5xl font-semibold leading-tight break-words">
                {"My Experience".split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className={`${idx === 1 ? "text-blue-main" : "text-black"}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <motion.div className="flex flex-col gap-8 w-full">
              {experienceData?.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  custom={idx}
                >
                  <p className="text-blue-600 font-semibold text-sm">{item.duration}</p>
                  <h3 className="text-xl font-bold mt-2">{item.company}, {item.location}</h3>
                  <p className="text-md font-medium mt-1 text-gray-700">{item.position}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimationWrapper>
        </div>

        {/* Education Section */}
        <div className="flex-1 flex flex-col gap-8 min-w-0">
          <AnimationWrapper>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl xl:text-5xl font-semibold leading-tight break-words">
                {"My Education".split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className={`${idx === 1 ? "text-blue-main" : "text-black"}`}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <motion.div className="flex flex-col gap-8 w-full">
              {educationData?.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-6 border border-gray-200 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 w-full"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  custom={idx}
                >
                  <p className="text-blue-600 font-semibold text-sm">{item.year}</p>
                  <h3 className="text-xl font-bold mt-2">{item.college}</h3>
                  <p className="text-md font-medium mt-1 text-gray-700">{item.degree}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimationWrapper>
        </div>

      </div>
    </div>
  );
}
