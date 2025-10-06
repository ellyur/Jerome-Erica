import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';

import hero_section from "@assets/hero-section.jpg";

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Newspaper Header Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl w-full py-20">
        {/* Names and Date Header */}
        <div className="flex justify-between items-center mb-8 font-times">
          <div className="text-left">
            <p className="text-base sm:text-lg font-bold tracking-wider" data-testid="text-names">
              JEROME & ERICKA
            </p>
          </div>
          <div className="text-right">
            <p className="text-base sm:text-lg font-bold tracking-wider" data-testid="text-date">
              08.15.2026
            </p>
          </div>
        </div>

        {/* Top Double Line */}
        <div className="newspaper-double-line"></div>

        {/* Ornamental Divider */}
        <div className="ornamental-divider my-4">
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,25 Q20,15 30,25 T50,25 T70,25 Q80,35 90,25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="25" r="8" fill="currentColor"/>
            <circle cx="20" cy="25" r="3" fill="currentColor"/>
            <circle cx="80" cy="25" r="3" fill="currentColor"/>
          </svg>
        </div>

        {/* Main Title - Old English Style */}
        <div className="mb-4">
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground tracking-wide leading-tight"
            data-testid="text-main-invitation"
            style={{ fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', serif", fontWeight: 400 }}
          >
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'The Newlywed Times',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                style={{ 
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span className="typewriter-text">
                The Newlywed Times
              </span>
            )}
          </h1>
        </div>

        {/* Bottom Ornamental Divider */}
        <div className="ornamental-divider my-4">
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,25 Q20,15 30,25 T50,25 T70,25 Q80,35 90,25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="25" r="8" fill="currentColor"/>
            <circle cx="20" cy="25" r="3" fill="currentColor"/>
            <circle cx="80" cy="25" r="3" fill="currentColor"/>
          </svg>
        </div>

        {/* Bottom Double Line */}
        <div className="newspaper-double-line mb-12"></div>

        {/* Wedding Photo with Border */}
        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div 
            className="max-w-4xl mx-auto mb-8 border-4 border-foreground p-2 bg-background"
          >
            <img 
              src={hero_section} 
              alt="Wedding Photo" 
              className="w-full h-auto"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
            />
          </div>

          {/* Venue Information */}
          <div className="bg-background border-2 border-foreground p-8 mb-10 max-w-2xl mx-auto">
            <div className="space-y-4 font-times">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold tracking-wider mb-2" data-testid="text-venue">
                  The Minor Basilica of Our Lady of the Rosary of Manaoag
                </p>
                <p className="text-lg sm:text-xl font-normal tracking-wide">
                  Manaoag, Pangasinan
                </p>
                <p className="text-base sm:text-lg font-light tracking-wide mt-2">
                  Friday, August 15, 2026
                </p>
              </div>
            </div>
          </div>
          
          {/* RSVP Button */}
          <div className={`transition-all duration-700 opacity-100 mt-8 ${animationsEnabled ? 'animate-fade-scale' : ''}`}>
            <a href="https://jerome-ericka-rsvp.replit.app" target="_blank" rel="noopener noreferrer">
              <button
                className="newspaper-rsvp-btn"
                aria-label="RSVP to Wedding"
                data-testid="button-rsvp-hero"
              >
                RSVP NOW
              </button>
            </a>
          </div>
        </div>

      </div>
      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
        }

        /* Newspaper RSVP Button */
        .newspaper-rsvp-btn {
          font-family: 'Times New Roman', serif;
          font-weight: bold;
          color: hsl(var(--foreground));
          background-color: transparent;
          padding: 1em 3em;
          border: 3px solid hsl(var(--foreground));
          border-radius: 0;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          letter-spacing: 3px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .newspaper-rsvp-btn:hover {
          background-color: hsl(var(--foreground));
          color: hsl(var(--background));
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: hsl(var(--foreground));
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
