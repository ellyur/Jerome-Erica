import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import coupleImg from '@assets/targeted_element_1759833520798.png';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue py-12 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 10 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Black Header Bar */}
        <div className="text-center mb-8">
          <div className="bg-foreground py-4 px-8 mb-8">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-rsvp-title"
            >
              <span className="font-script italic">RSVP</span>
            </h2>
          </div>
        </div>

        {/* Couple Image */}
        <div className="flex justify-center mb-8">
          <img 
            src={coupleImg} 
            alt="Jerome and Ericka" 
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            data-testid="img-couple-rsvp"
          />
        </div>

        {/* Google Form Iframe */}
        <div className="flex justify-center">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf8-NfOjB3V0c3Tvd37RGM9C9SOi2oL2gyuwqihjyQxoJWmNg/viewform?embedded=true" 
            width="640" 
            height="1461" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="w-full max-w-full"
            title="RSVP Form"
            data-testid="iframe-rsvp-form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;