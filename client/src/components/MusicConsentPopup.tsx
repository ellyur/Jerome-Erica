import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music, Flower2, Leaf } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-background rounded-none p-8 md:p-12 max-w-lg w-full mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-4 border-foreground relative overflow-hidden"
          >
            {/* Decorative corner flourishes */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-foreground opacity-60"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-foreground opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-foreground opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-foreground opacity-60"></div>
            
            <div className="relative text-center space-y-6">
              {/* Divider line above icon */}
              <div className="newspaper-double-line"></div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="bg-foreground p-5 rounded-full shadow-md border-2 border-foreground">
                  <Music className="h-10 w-10 text-background" />
                </div>
              </motion.div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A Musical Journey
                </h2>
                
                {/* Divider */}
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[2px] w-12 bg-foreground"></div>
                  <div className="w-2 h-2 bg-foreground"></div>
                  <div className="h-[2px] w-12 bg-foreground"></div>
                </div>

                <p className="text-foreground leading-relaxed text-base md:text-lg font-times italic px-4">
                  Would you like to play music to explore our save the date?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  onClick={() => handleConsent(true)}
                  className="flex-1 bg-foreground hover:bg-foreground/90 text-background font-bold py-5 px-6 rounded-none transition-all duration-300 hover:scale-105 hover:shadow-lg text-base border-2 border-foreground font-times"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="outline"
                  className="flex-1 border-2 border-foreground hover:border-foreground text-foreground hover:text-background hover:bg-foreground bg-transparent font-medium py-5 px-6 rounded-none transition-all duration-300 text-base font-times"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>

              {/* Bottom decorative element */}
              <div className="newspaper-line mt-6"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;