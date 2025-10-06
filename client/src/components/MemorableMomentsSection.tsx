import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import img8 from '@assets/prenupphotos6_1759764198140.jpg';
import img15 from '@assets/prenupphotos3_1759764198142.jpg';
import img26 from '@assets/prenupphotos1_1759764198143.jpg';

const MemorableMomentsSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/images/prenupphotos_1759760761701.jpg', alt: "Family stacked photo", height: "h-64" },
    { src: '/images/prenupphotos1_1759760761700.jpg', alt: "Couple casual photo", height: "h-80" },
    { src: '/images/prenupphotos2_1759760761700.jpg', alt: "Couple selfie", height: "h-72" },
    { src: img8, alt: "8", height: "h-96" },
    { src: '/images/prenupphotos4_1759760761699.jpg', alt: "Family with baby", height: "h-64" },
    { src: '/images/prenupphotos6_1759760761698.jpg', alt: "Couple formal", height: "h-80" },
    { src: '/images/prenup7_1759760761699.jpg', alt: "Family lifting child", height: "h-72" },
    { src: '/images/cover1_1759760761700.jpg', alt: "Family photo", height: "h-64" },
    { src: '/images/cover3_1759760761697.jpg', alt: "Family seated", height: "h-96" },
    { src: img15, alt: "15", height: "h-80" },
    { src: '/images/hero-section_1759760761701.jpg', alt: "Couple portrait", height: "h-72" },
    { src: img26, alt: "26", height: "h-64" }
  ];

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date Photos
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-white/90">
            Captured moments before forever begins
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              data-testid={`img-prenup-${index}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-contain group-hover:brightness-90 transition-all duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-script text-lg">View Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">Prenup Photo Gallery</DialogTitle>
            <DialogDescription className="sr-only">View prenup photo in full size</DialogDescription>
            
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              {selectedImage !== null && (
                <motion.img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`img-lightbox-${selectedImage}`}
                />
              )}

              {/* Navigation Buttons */}
              {selectedImage !== null && selectedImage > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                  data-testid="button-prev-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedImage !== null && selectedImage < images.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
                  data-testid="button-next-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image Counter */}
              {selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  <span className="text-sm font-script">
                    {selectedImage + 1} of {images.length}
                  </span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
