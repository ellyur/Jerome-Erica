import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import coupleImg from '@assets/targeted_element_1759833520798.png';

const RSVPSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue py-4 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={animationsEnabled ? { duration: 0.6 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Black Header Bar */}
        <div className="text-center mb-8">
          <div className="bg-foreground py-4 px-8">
            <h2 
              className="text-2xl sm:text-3xl text-background font-bold tracking-wider"
              data-testid="text-rsvp-title"
            >
              RSVP
            </h2>
          </div>
        </div>

        {/* RSVP Description */}
        <div className="text-center mb-8 px-4">
          <p className="text-sm sm:text-base italic mb-4" data-testid="text-rsvp-description">
            Please confirm your attendance on or before February 10, 2026 to ensure you are included on our final guest list.
          </p>
          <p className="text-sm sm:text-base italic" data-testid="text-rsvp-instruction">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8-NfOjB3V0c3Tvd37RGM9C9SOi2oL2gyuwqihjyQxoJWmNg/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline cursor-pointer"
            >
              Click here
            </a> or fill out the form below to RSVP.
          </p>
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