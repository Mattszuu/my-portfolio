import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import CONFIG from "../data/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden"
    >
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Available for opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 bg-clip-text text-transparent animate-gradient">
            {CONFIG.name.split(" ")[0]} {CONFIG.name.split(" ")[1]}
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-400 mb-6">
          {CONFIG.title}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          {CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative flex items-center justify-center gap-2">
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all w-full sm:w-auto"
          >
            Let's Connect
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={CONFIG.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={CONFIG.socials.Instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600 hover:text-white transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
