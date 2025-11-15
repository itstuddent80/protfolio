import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import profileImage from "figma:asset/50604d79c784790a92324edad302aa66fa4bd4b4.png";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            <div className="space-y-2">
              <p className="text-blue-400">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl">Sital Mahato</h1>
              <h2 className={`text-2xl md:text-3xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Web Developer</h2>
            </div>

            <p className={`max-w-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Motivated IT student with a strong foundation in programming, web development, 
              and database management. Passionate about building efficient and user-friendly software solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700">
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className={`${isDark ? 'border-slate-600 bg-blue-600 text-white hover:bg-slate-800' : 'border-slate-300 bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className={`flex gap-4 pt-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <a href="https://github.com/sitalmahato" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/sitalmahato" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:sitalmahato077@gmail.com" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}>
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Sital - Web Developer"
                className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}