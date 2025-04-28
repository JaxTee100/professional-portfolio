"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { motion } from "framer-motion"; // Make sure framer-motion is installed!

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Projects" },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <motion.div
      key={item.id}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-block"
    >
      <LinkScroll
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        duration={2000}
        onSetActive={() => setActiveLink(item.id)}
        className={`px-4 py-2 mx-2 cursor-pointer text-lg font-bold text-[#000] transition-all 
          ${activeLink === item.id ? "text-blue-main" : "hover:text-blue-main"}
        `}
      >
        {item.label}
        {/* Animated underline */}
        <motion.span
          layoutId="underline"
          className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-blue-main transition-all`}
          initial={{ width: 0 }}
          animate={{
            width: activeLink === item.id ? "100%" : "0%",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        />
      </LinkScroll>
    </motion.div>
  ));
}



export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-blue-main">
              <div className="w-[40px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-blue-main bg-blue-main">
                <span className="text-[#fff] text-[25px] font-bold">P</span>
              </div>
              ortfolio
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-3 px-6 border-3 bg-[#fff] border-blue-main text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none cursor-pointer hover:bg-slate-200"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3 ">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}