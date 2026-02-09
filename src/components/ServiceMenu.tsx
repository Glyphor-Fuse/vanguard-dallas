import { Check } from "lucide-react";

interface ServiceProps {
  mode: "corporate" | "editorial";
}

export const ServiceMenu = ({ mode }: ServiceProps) => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-foreground/10 bg-background transition-colors duration-700">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl mb-6 ${mode === 'editorial' ? 'font-serif italic' : 'font-sans font-bold'}`}>
            {mode === 'editorial' ? "Session Fees" : "Investment Packages"}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className={`p-8 md:p-12 border transition-all duration-500 ${mode === 'editorial' ? 'border-white/10 hover:border-rose-500/50 bg-white/5' : 'border-black/10 hover:border-blue-500/50 bg-gray-50'}`}>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2">
              {mode === 'editorial' ? 'The Artist' : 'The Professional'}
            </h3>
            <div className="text-4xl font-light mb-8">
              $350<span className="text-sm opacity-50 ml-2">/ session</span>
            </div>
            <ul className="space-y-4 opacity-80 mb-8">
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 1 Hour Studio Time</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 2 Outfit Changes</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> {mode === 'editorial' ? 'Creative Direction' : 'Posing Coaching'}</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 3 High-End Retouches</li>
            </ul>
            <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors ${mode === 'editorial' ? 'bg-rose-600 hover:bg-rose-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              Select Plan
            </button>
          </div>

          {/* Card 2 */}
          <div className={`p-8 md:p-12 border transition-all duration-500 ${mode === 'editorial' ? 'border-rose-500 bg-black' : 'border-blue-200 bg-white shadow-xl'}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold uppercase tracking-widest">
                {mode === 'editorial' ? 'The Visionary' : 'Executive Brand'}
              </h3>
              <span className={`text-[10px] px-2 py-1 uppercase tracking-widest font-bold ${mode === 'editorial' ? 'bg-rose-500 text-white' : 'bg-blue-100 text-blue-800'}`}>
                Most Popular
              </span>
            </div>
            
            <div className="text-4xl font-light mb-8">
              $650<span className="text-sm opacity-50 ml-2">/ session</span>
            </div>
            <ul className="space-y-4 opacity-80 mb-8">
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 2.5 Hour Studio Time</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Unlimited Outfits</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> {mode === 'editorial' ? 'Mood Board Planning' : 'On-Site Option'}</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> 8 High-End Retouches</li>
              <li className="flex items-center gap-3"><Check className="w-4 h-4" /> Makeup Artist Included</li>
            </ul>
            <button className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors ${mode === 'editorial' ? 'bg-white hover:bg-gray-200 text-black' : 'bg-black hover:bg-gray-800 text-white'}`}>
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMenu;
