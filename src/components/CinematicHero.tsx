import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, Star } from 'lucide-react';

interface HeroProps {
  mode: "corporate" | "editorial";
}

export const CinematicHero = ({ mode }: HeroProps) => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center transition-colors duration-700 ease-in-out">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          {mode === "editorial" ? (
            <motion.img
              key="editorial-bg"
              src="/images/hero-editorial.jpg"
              alt="Dramatic editorial portrait"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover brightness-50"
            />
          ) : (
            <motion.img
              key="corporate-bg"
              src="/images/hero-corporate.jpg"
              alt="Professional corporate headshot"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover brightness-[0.85]"
            />
          )}
        </AnimatePresence>
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t ${mode === 'editorial' ? 'from-background via-background/40 to-transparent' : 'from-background via-white/20 to-transparent'} transition-colors duration-700`} />
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-start justify-center h-full">
        <motion.div
          key={mode}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className={`h-[1px] w-12 ${mode === 'editorial' ? 'bg-rose-500' : 'bg-blue-600'}`} />
            <span className={`text-sm tracking-[0.2em] uppercase font-medium ${mode === 'editorial' ? 'text-rose-400' : 'text-blue-700'}`}>
              {mode === 'editorial' ? 'The Art of Persona' : 'Professional Branding'}
            </span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] ${mode === 'editorial' ? 'font-serif italic' : 'font-sans tracking-tight'}`}>
            {mode === 'editorial' ? (
              <>
                Shadows define <br /> <span className="text-white/80">the light.</span>
              </>
            ) : (
              <>
                Clarity defines <br /> <span className="text-foreground/80">the leader.</span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl max-w-lg mb-10 opacity-90 leading-relaxed">
            {mode === 'editorial' 
              ? "Dallas-based cinematic portraiture for artists, visionaries, and those who refuse to be forgotten."
              : "Premium headshots and executive branding for Dallas professionals who lead with confidence."}
          </p>

          <button className={`group flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 ${mode === 'editorial' ? 'bg-rose-600 hover:bg-rose-700 text-white' : 'bg-blue-900 hover:bg-blue-800 text-white'}`}>
            {mode === 'editorial' ? 'Book a Session' : 'View Packages'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
