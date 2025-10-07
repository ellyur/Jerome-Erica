import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import bouquetSponsorsImg from '@assets/boquet_1759741371019.png';
import guestsImg from '@assets/guests_1759763680809.png';

import principal_sponsors from "@assets/principal sponsors.png";

const DressCodeSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 7.5 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Black Header Bar */}
        <div className="text-center mb-12">
          <div className="bg-foreground py-4 px-8 mb-8">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-what-to-wear-title"
            >
              <span className="font-script italic">What to</span> WEAR?
            </h2>
          </div>
        </div>

        {/* Intro Text */}
        <p className="text-center text-sm sm:text-base mb-12" data-testid="text-dress-code-intro">
          We would love to see you dress according to our color palette.
        </p>

        {/* Bouquet Sponsors Section */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 7.8 } : { duration: 0 }}
        >
          {/* Bouquet Sponsors Header */}
          <div className="bg-foreground py-3 px-6 mb-6 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl text-background font-script italic text-center" data-testid="text-bouquet-sponsors">
              Bouquet Sponsors
            </h3>
          </div>

          {/* Dress Code Details */}
          <div className="bg-muted/30 py-3 px-6 mb-6 max-w-2xl mx-auto">
            <div className="text-center space-y-1">
              <p className="text-sm sm:text-base" data-testid="text-gentlemen-bouquet">
                <strong>Gentlemen:</strong> Black Suit with Maroon Necktie
              </p>
              <p className="text-sm sm:text-base" data-testid="text-ladies-bouquet">
                <strong>Ladies:</strong> Maroon Dress with Touch of Gold
              </p>
            </div>
          </div>

          {/* Bouquet Sponsors Illustration */}
          <div className="max-w-lg mx-auto">
            <img 
              src={principal_sponsors}
              alt="Bouquet Sponsors Attire" 
              className="w-full h-auto"
              data-testid="img-bouquet-sponsors"
            />
          </div>
        </motion.div>

        {/* Guests Section */}
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 8.2 } : { duration: 0 }}
        >
          {/* Guests Header */}
          <div className="bg-foreground py-3 px-6 mb-6 max-w-md mx-auto">
            <h3 className="text-xl sm:text-2xl text-background font-script italic text-center" data-testid="text-guests">
              Guests
            </h3>
          </div>

          {/* Dress Code Details */}
          <div className="bg-muted/30 py-3 px-6 mb-6 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-sm sm:text-base font-bold" data-testid="text-guests-attire">
                Formal Attire
              </p>
              <p className="text-sm sm:text-base" data-testid="text-guests-color">
                All Black
              </p>
            </div>
          </div>

          {/* Guests Illustration */}
          <div className="max-w-2xl mx-auto">
            <img 
              src={guestsImg}
              alt="Guests Attire" 
              className="w-full h-auto"
              data-testid="img-guests-attire"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
