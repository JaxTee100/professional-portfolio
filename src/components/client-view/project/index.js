"use client";

import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  return (
    <div
      className="max-w-screen-xl mt-24 mb-12 sm:mt-16 sm:mb-20 px-6 sm:px-8 lg:px-16 mx-auto"
      id="project"
    >
      <AnimationWrapper className="lg:pt-16 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" leading-[70px] mb-8 text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800">
            {"My Projects".split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 1 ? "text-blue-500" : "text-slate-800"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>

      <AnimationWrapper>
        <div
          className="overflow-y-hidden overflow-x-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20"
          ref={containerRef}
        >
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-white p-6 flex flex-col justify-between shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="  text-xs text-gray-400">{item.createdAt.split("T")[0]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item?.technologies.split(" ").map((techItem) => (
                      <p
                        key={techItem}
                        className="text-[10px] text-gray-400 font-semibold"
                      >
                        {techItem.trim()}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => router.push(item.website)}
                    className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-all"
                  >
                    Website
                  </button>
                  <button
                    onClick={() => router.push(item.github)}
                    className="flex-1 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-sm font-bold transition-all"
                  >
                    Github
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-full">No projects found.</div>
          )}
        </div>
      </AnimationWrapper>
    </div>
  );
}
