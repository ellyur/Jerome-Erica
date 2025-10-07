import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

import saveDate1 from "@assets/photo_2025-10-07_17-11-19_1759828380358.jpg";
import saveDate2 from "@assets/photo_2025-10-07_17-11-21_1759828380357.jpg";
import saveDate3 from "@assets/photo_2025-10-07_17-11-16_1759828380358.jpg";

import save_the_date_08 from "@assets/save-the-date-08.jpg";

import save_the_date_15 from "@assets/save-the-date-15.jpg";

import save_the_date_26 from "@assets/save-the-date-26.jpg";

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl w-full py-20">
        {/* Header Bar with Hearts */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="text-2xl">♥ ♥ ♥</span>
          <div className="flex-grow h-0.5 bg-foreground max-w-xs"></div>
          <h2 className="text-xl sm:text-2xl tracking-widest font-bold" data-testid="text-save-the-date">
            SAVE <span className="font-script italic">the</span> DATE
          </h2>
          <div className="flex-grow h-0.5 bg-foreground max-w-xs"></div>
          <span className="text-2xl">♥ ♥ ♥</span>
        </div>

        {/* Photo Collage with Date */}
        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) || !animationsEnabled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8">
            {/* Top Left - Photo 1 with border */}
            <div className="border-4 border-foreground p-2 bg-background">
              <img 
                src={save_the_date_08}
                alt="Wedding Photo 1" 
                className="w-full h-auto"
                data-testid="img-save-date-1"
              />
            </div>

            {/* Top Right - Large "08" */}
            <div className="flex items-center justify-center">
              <h1 
                className="text-[120px] sm:text-[180px] md:text-[220px] leading-none font-bold"
                style={{ fontFamily: "'Impact', sans-serif" }}
                data-testid="text-date-08"
              >
                08
              </h1>
            </div>

            {/* Bottom Left - Large "15" */}
            <div className="flex items-center justify-center">
              <h1 
                className="text-[120px] sm:text-[180px] md:text-[220px] leading-none font-bold"
                style={{ fontFamily: "'Impact', sans-serif" }}
                data-testid="text-date-15"
              >
                15
              </h1>
            </div>

            {/* Bottom Center - Photo 2 with border */}
            <div className="border-4 border-foreground p-2 bg-background">
              <img 
                src={save_the_date_15}
                alt="Wedding Photo 2" 
                className="w-full h-auto"
                data-testid="img-save-date-2"
              />
            </div>

            {/* Bottom - Photo 3 with border */}
            <div className="border-4 border-foreground p-2 bg-background col-span-2 sm:col-span-1">
              <img 
                src={save_the_date_26}
                alt="Wedding Photo 3" 
                className="w-full h-auto"
                data-testid="img-save-date-3"
              />
            </div>

            {/* Bottom Right - Large "26" */}
            <div className="flex items-center justify-center">
              <h1 
                className="text-[120px] sm:text-[180px] md:text-[220px] leading-none font-bold"
                style={{ fontFamily: "'Impact', sans-serif" }}
                data-testid="text-date-26"
              >
                26
              </h1>
            </div>
          </div>

          {/* Invitation Text */}
          <div className="mt-12 font-script italic text-2xl sm:text-3xl md:text-4xl" data-testid="text-invitation">
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'See you on our wedding day!',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="p"
                speed={50}
                cursor={true}
                repeat={0}
              />
            ) : (
              <p>See you on our wedding day!</p>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .hero-section h1 {
            font-size: 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
