"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className=" max-w-screen-xl mt-[200px] mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto pt-16 font-mono"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] lg:mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Experience".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-blue-main" : "text-[#000]"
                    }`}
                    key={index}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container ">
                <Timeline position="right" >
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem, index) => (
                        <TimelineItem key={index} >
                          <TimelineSeparator className="">
                            <TimelineDot color="grey" variant="filled" className="border border-blue-main" />
                            <TimelineConnector className="bg-blue-main border border-blue-main" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-blue-main mt-[14px] ml-[16px]">
                              <p className="font-bold">
                                {experienceItem.duration}
                              </p>
                              <h3 className="font-extrabold mt-2">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </h3>
                              <p className="font-extrabold mt-2">
                                {experienceItem.position}
                              </p>
                              
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 "}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-blue-main" : "text-[#000]"
                    }`}
                    key={index}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem, index) => (
                        <TimelineItem key={index}>
                          <TimelineSeparator>
                            <TimelineDot className="bg-blue-main" />
                            <TimelineConnector className="bg-blue-main" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-blue-main mt-[14px] ml-[16px]">
                              <p className="font-bold">
                                {educationItem.year}
                              </p>
                              <h3 className="font-extrabold mt-2">
                                {educationItem.college}
                              </h3>
                              <p className="font-extrabold mt-2">
                                {educationItem.degree}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}
