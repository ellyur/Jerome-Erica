import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import heroPhoto from "@assets/photo_2025-10-07_17-37-04_1759829841162.jpg";

import hero_section from "@assets/hero-section.jpg";
import newlywedTimesHeader from "@assets/image_1759911805962.png";

import head from "@assets/head.png";

const NewspaperHero = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      className="newspaper-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-8 px-4"
      style={{ backgroundColor: '#f5f1e8' }}
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={animationsEnabled ? { duration: 0.6 } : { duration: 0 }}
    >
      <div className="relative z-10 max-w-5xl w-full" style={{ color: '#1c1c1c' }}>
        {/* The Newlywed Times Header Image */}
        <motion.div 
          className="mb-8"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut" } : { duration: 0 }}
        >
          <img 
            src={head}
            alt="The Newlywed Times - Jerome & Ericka - 08.15.2026" 
            className="w-full h-auto"
            data-testid="img-newspaper-header"
          />
        </motion.div>

        {/* Main Photo with Double Border */}
        <motion.div 
          className="mb-6 max-w-3xl mx-auto" 
          style={{ border: '3px solid #1c1c1c', padding: '8px', backgroundColor: '#f5f1e8' }}
          initial={animationsEnabled ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.1 } : { duration: 0 }}
        >
          <div style={{ border: '1px solid #1c1c1c', padding: '4px' }}>
            <img 
              src={hero_section}
              alt="Jerome and Ericka" 
              className="w-full h-auto"
              style={{ filter: 'grayscale(100%)' }}
              data-testid="img-couple-hero"
            />
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl text-center mb-3"
          style={{ 
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.3em',
            lineHeight: 1.1
          }}
          data-testid="text-couple-names-main"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.2 } : { duration: 0 }}
        >
          JEROME <span style={{ fontFamily: "'Times New Roman', serif", fontWeight: 400 }}>&</span> ERICKA
        </motion.h2>

        {/* Main Headline */}
        <motion.h3 
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-5"
          style={{ 
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.2em',
            lineHeight: 1.1
          }}
          data-testid="text-getting-married"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          ARE GETTING MARRIED!
        </motion.h3>

        {/* Decorative Line */}
        <motion.div 
          className="mb-5 max-w-4xl mx-auto" 
          style={{ borderTop: '1px solid #1c1c1c' }}
          initial={animationsEnabled ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.4 } : { duration: 0 }}
        ></motion.div>

        {/* Subheading - Small Caps */}
        <motion.p 
          className="text-center text-xs sm:text-sm mb-6 max-w-3xl mx-auto uppercase"
          style={{ 
            fontWeight: 500,
            letterSpacing: '0.25em',
            lineHeight: 1.4
          }}
          data-testid="text-celebration-message"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.5 } : { duration: 0 }}
        >
          JOIN US IN CELEBRATING A UNION OF LOVE, LAUGHTER, AND HAPPINESS
        </motion.p>

        {/* Welcome Message - Italic Serif Quote */}
        <motion.div 
          className="max-w-2xl mx-auto mb-8 text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.6 } : { duration: 0 }}
        >
          <p 
            className="text-sm italic"
            style={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontWeight: 400,
              lineHeight: 1.6,
              fontStyle: 'italic'
            }}
            data-testid="text-welcome-message"
          >
            "Everything's better when we are together"
          </p>
          <p 
            className="text-xs mt-2 uppercase"
            style={{ 
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
            data-testid="text-quote-attribution"
          >
            - Jerome and Ericka
          </p>
        </motion.div>

        {/* Welcome Text Below Quote */}
        <motion.div 
          className="max-w-3xl mx-auto mb-8 text-right px-4"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.7 } : { duration: 0 }}
        >
          <p 
            className="text-xs italic"
            style={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontWeight: 400,
              lineHeight: 1.5
            }}
            data-testid="text-welcome-paragraph"
          >
            Welcome! We are so thrilled to share this special day with you. Your presence means the world to us, and we cannot wait to celebrate our love with the people who matter most. Thank you for joining us as we begin this new chapter together.
          </p>
        </motion.div>

        {/* Footer Banner with Bullets */}
        <motion.div 
          className="mt-8" 
          style={{ borderTop: '2px solid #1c1c1c', borderBottom: '2px solid #1c1c1c', padding: '6px 0' }}
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.8 } : { duration: 0 }}
        >
          <div className="flex justify-center items-center gap-4 text-xs sm:text-sm uppercase" style={{ fontWeight: 700, letterSpacing: '0.1em' }}>
            <span data-testid="text-best-day-1">THE BEST DAY EVER</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline" data-testid="text-best-day-2">THE BEST DAY EVER</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline" data-testid="text-best-day-3">THE BEST DAY EVER</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewspaperHero;
