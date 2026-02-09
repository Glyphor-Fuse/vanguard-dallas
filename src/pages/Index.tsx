import { useState, useEffect } from "react";
import { StudioNav } from "@/components/StudioNav";
import { CinematicHero } from "@/components/CinematicHero";
import { DualGallery } from "@/components/DualGallery";
import { ServiceMenu } from "@/components/ServiceMenu";

const Index = () => {
  const [mode, setMode] = useState<"corporate" | "editorial">("editorial");

  const toggleMode = () => {
    setMode((prev) => (prev === "editorial" ? "corporate" : "editorial"));
  };

  // Sync mode with body/html data attribute for CSS variables
  useEffect(() => {
    // We apply it to a wrapping div in the render normally, 
    // but applying to document element ensures global variable scope hits everything
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${mode === 'editorial' ? 'selection:bg-rose-500 selection:text-white' : 'selection:bg-blue-200 selection:text-blue-900'}`}>
      <StudioNav mode={mode} toggleMode={toggleMode} />
      <main>
        <CinematicHero mode={mode} />
        <DualGallery mode={mode} />
        <ServiceMenu mode={mode} />
      </main>
      
      {/* Footer Simple */}
      <footer className="py-12 px-6 border-t border-foreground/10 text-center opacity-60 text-sm">
        <p>&copy; {new Date().getFullYear()} Vanguard Dallas Studios. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
