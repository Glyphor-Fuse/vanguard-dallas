import { motion } from "framer-motion";

interface GalleryProps {
  mode: "corporate" | "editorial";
}

const editorialImages = [
  { src: "/images/gallery-edit-1.jpg", alt: "Shadowy silhouette", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/gallery-edit-2.jpg", alt: "Neon lit portrait", span: "col-span-1" },
  { src: "/images/gallery-edit-3.jpg", alt: "Black and white close up", span: "col-span-1" },
  { src: "/images/gallery-edit-4.jpg", alt: "Fashion shot", span: "col-span-1 md:col-span-2" },
];

const corporateImages = [
  { src: "/images/gallery-corp-1.jpg", alt: "Smiling executive", span: "col-span-1" },
  { src: "/images/gallery-corp-2.jpg", alt: "Team meeting", span: "col-span-1 md:col-span-2 row-span-2" },
  { src: "/images/gallery-corp-3.jpg", alt: "Linked In headshot", span: "col-span-1" },
  { src: "/images/gallery-corp-4.jpg", alt: "Office environment", span: "col-span-1 md:col-span-2" },
];

export const DualGallery = ({ mode }: GalleryProps) => {
  const images = mode === "editorial" ? editorialImages : corporateImages;

  return (
    <section className="py-24 px-6 md:px-12 bg-background transition-colors duration-700">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className={`text-4xl md:text-6xl mb-4 ${mode === 'editorial' ? 'font-serif italic' : 'font-sans font-bold'}`}>
              {mode === 'editorial' ? "Selected Works" : "Client Showcase"}
            </h2>
            <p className="opacity-70 max-w-md">
              {mode === 'editorial' 
                ? "An exploration of character through shadow, color, and avant-garde composition." 
                : "Helping Dallas professionals communicate competence and approachability."}
            </p>
          </div>
          <button className="text-sm uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={`${mode}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group overflow-hidden bg-gray-200 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DualGallery;
