"use client";
import React from "react";
import Menu from "../Animations/menu/Menu";
import Image from "next/image";
import carBg from "@/public/hero-bg.png";
import carMain from "@/public/hero.png";
import logo from "@/public/logo.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      {/* Fixed Top Nav */}
      <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 bg-opacity-90 backdrop-blur-md h-20 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-full px-4 sm:px-6">
          {/* Brand + Nav */}
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="Logo"
              width={42}
              height={42}
              className="rounded-full shadow-md"
            />
            <h1 className="text-white text-lg  sm:text-xl font-bold tracking-wide">
              INFINITY
            </h1>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-6 ml-6">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li
                  key={item}
                  className="text-white text-sm font-medium hover:text-blue-500 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Menu />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={carBg}
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90 z-10" />
        </div>

        {/* Hero Text */}
        <div className="absolute z-20 max-w-xl text-start px-4 sm:px-8 top-[18%] sm:top-[25%] left-4 sm:left-12 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-white text-4xl sm:text-6xl md:text-6xl font-extrabold leading-tight"
          >
            Drive the Future <br />
            with <span className="text-blue-500">Infinity</span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="px-7 py-3 sm:px-6 sm:py-3 bg-blue-600 text-white text-base sm:text-lg rounded-xl hover:bg-blue-700 transition"
          >
            Rent Cars
          </motion.button>
        </div>

        {/* Car Image */}
        <motion.div
          initial={{ x: "100%", opacity: 0, scale: 0.98 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 w-full max-w-6xl px-4 sm:px-8 mt-40 sm:mt-60"
        >
          <Image
            src={carMain}
            alt="Main Car"
            className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            priority
          />
        </motion.div>
      </section>
    </>
  );
};

export default Header;
