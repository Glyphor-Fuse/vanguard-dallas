import { useState } from "react";
import { motion } from "framer-motion";

interface NavProps {
  mode: "corporate" | "editorial";
  toggleMode: () => void;
}

export const StudioNav = ({ mode, toggleMode }: NavProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-background/5 transition-colors duration-700">
      {/* Brand Logo */}
      <div className="text-2xl tracking-tighter font-bold z-50">
        VANGUARD<span className={mode === 'editorial' ? 'text-rose-500' : 'text-blue-600'}>.</span>
      </div>

      {/* Center Links - Desktop */}
      <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest uppercase font-medium opacity-80">
        <a href="#" className="hover:opacity-100 transition-opacity">Work</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Studio</a>
        <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
      </div>

      {/* Mood Toggle */}
      <button
        onClick={toggleMode}
        className={`relative inline-flex h-10 w-36 items-center rounded-full border px-1 transition-all duration-500 focus:outline-none ${
          mode === "editorial" 
            ? "border-white/20 bg-black/40" 
            : "border-black/10 bg-white/60"
        }`}
      >
        <span className="sr-only">Toggle Mode</span>
        
        {/* Labels inside toggle */}
        <span className={`absolute left-3 text-[10px] uppercase tracking-widest font-bold transition-opacity duration-300 ${mode === 'corporate' ? 'opacity-100' : 'opacity-40'}`}>
          Corp
        </span>
        <span className={`absolute right-3 text-[10px] uppercase tracking-widest font-bold transition-opacity duration-300 ${mode === 'editorial' ? 'opacity-100' : 'opacity-40'}`}>
          Edit
        </span>

        {/* Moving Pill */}
        <span
          className={`h-7 w-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 transform ${
            mode === "editorial" 
              ? "translate-x-[4.5rem] bg-rose-600 text-white" 
              : "translate-x-0 bg-blue-600 text-white"
          }`}
        >
           <span className="text-[10px] uppercase font-bold tracking-widest">
             {mode === "editorial" ? "Dark" : "Light"}
           </span>
        </span>
      </button>
    </nav>
  );
};

export default StudioNav;
