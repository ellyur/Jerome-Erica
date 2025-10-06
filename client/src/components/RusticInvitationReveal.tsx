import { motion } from 'framer-motion';
import { useState } from 'react';
import img8 from '@assets/prenupphotos6_1759764198140.jpg';
import img15 from '@assets/prenupphotos3_1759764198142.jpg';
import img26 from '@assets/prenupphotos1_1759764198143.jpg';

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [showPolaroids, setShowPolaroids] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);

  const handleEnvelopeClick = () => {
    setEnvelopeOpening(true);
    
    setTimeout(() => {
      setShowEnvelope(false);
      setShowPolaroids(true);
    }, animationsEnabled ? 1000 : 0);

    setTimeout(() => {
      setShowInvitation(true);
    }, animationsEnabled ? 2500 : 0);
  };

  const polaroids = [
    { src: img8, alt: '8', rotation: -3, delay: 0 },
    { src: img15, alt: '15', rotation: 1, delay: 0.3 },
    { src: img26, alt: '26', rotation: -2, delay: 0.6 }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Newspaper Envelope */}
      {showEnvelope && (
        <motion.div
          initial={animationsEnabled ? { opacity: 0, scale: 0.8, y: 50 } : { opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -100 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 flex flex-col items-center"
          data-testid="rustic-envelope"
        >
          {/* Newspaper Folded Paper */}
          <motion.div
            animate={envelopeOpening ? {
              rotateX: -15,
              y: -20,
              scale: 1.1
            } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <div className="relative">
              <svg width="400" height="280" viewBox="0 0 400 280" className="drop-shadow-lg">
                <defs>
                  <pattern id="newspaperTexture" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                    <rect width="2" height="2" fill="hsl(40, 15%, 92%)"/>
                    <line x1="0" y1="0" x2="2" y2="2" stroke="hsl(0, 0%, 10%)" strokeWidth="0.1" opacity="0.1"/>
                  </pattern>
                </defs>

                {/* Envelope Body - Newspaper Style */}
                <rect
                  x="20"
                  y="60"
                  width="360"
                  height="200"
                  fill="hsl(40, 15%, 92%)"
                  stroke="hsl(0, 0%, 10%)"
                  strokeWidth="3"
                  rx="0"
                />

                {/* Newspaper texture overlay */}
                <rect
                  x="20"
                  y="60"
                  width="360"
                  height="200"
                  fill="url(#newspaperTexture)"
                  opacity="0.3"
                  rx="0"
                />

                {/* Inner Border */}
                <rect
                  x="30"
                  y="70"
                  width="340"
                  height="180"
                  fill="none"
                  stroke="hsl(0, 0%, 10%)"
                  strokeWidth="2"
                  rx="0"
                />

                {/* Address Lines - Newspaper Style */}
                <line x1="60" y1="110" x2="200" y2="110" stroke="hsl(0, 0%, 10%)" strokeWidth="1.5"/>
                <line x1="60" y1="130" x2="220" y2="130" stroke="hsl(0, 0%, 10%)" strokeWidth="1.5"/>
                <line x1="60" y1="150" x2="180" y2="150" stroke="hsl(0, 0%, 10%)" strokeWidth="1.5"/>

                {/* Postage Stamp Area */}
                <rect x="310" y="80" width="50" height="60" fill="none" stroke="hsl(0, 0%, 10%)" strokeWidth="2" strokeDasharray="3,3"/>
                <text x="335" y="110" textAnchor="middle" fill="hsl(0, 0%, 10%)" fontSize="10" fontFamily="Times New Roman">FIRST</text>
                <text x="335" y="125" textAnchor="middle" fill="hsl(0, 0%, 10%)" fontSize="10" fontFamily="Times New Roman">CLASS</text>

                {/* Envelope Back Flap */}
                <polygon
                  points="20,60 200,140 380,60"
                  fill="hsl(40, 15%, 88%)"
                  stroke="hsl(0, 0%, 10%)"
                  strokeWidth="3"
                />

                {/* Envelope Front Flap */}
                <motion.polygon
                  points="20,60 200,140 380,60 380,40 200,120 20,40"
                  fill="hsl(40, 15%, 92%)"
                  stroke="hsl(0, 0%, 10%)"
                  strokeWidth="3"
                  style={{ transformOrigin: '200px 60px', transformBox: 'fill-box', opacity: 1 }}
                  animate={envelopeOpening ? {
                    rotateX: 180,
                    opacity: 0.3
                  } : {
                    rotateX: 0,
                    opacity: 1
                  }}
                  transition={{ duration: 0.8 }}
                />

                {/* Seal/Monogram */}
                <g transform="translate(200, 80)">
                  <rect x="-20" y="-20" width="40" height="40" fill="none" stroke="hsl(0, 0%, 10%)" strokeWidth="2"/>
                  <text x="0" y="8" textAnchor="middle" fill="hsl(0, 0%, 10%)" fontSize="18" fontFamily="Times New Roman" fontWeight="bold">X&A</text>
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Click Button - Newspaper Style */}
          <motion.div
            className="mt-8 cursor-pointer"
            onClick={handleEnvelopeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            data-testid="button-click-envelope"
          >
            <div className="relative">
              {/* Pulse Animation */}
              <motion.div
                className="absolute inset-0 border-2 border-foreground"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Button */}
              <div className="relative w-32 h-32 border-4 border-foreground bg-background shadow-md flex flex-col items-center justify-center">
                {/* Click Text */}
                <span className="text-foreground text-xl font-bold z-10 font-times tracking-wider">
                  OPEN
                </span>
                <div className="h-px w-16 bg-foreground my-1"></div>
                <span className="text-foreground text-sm z-10 font-times">Click Here</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Newspaper Clipping Photos */}
      {showPolaroids && (
        <div className="relative z-10 mb-16 flex flex-wrap items-center justify-center gap-8 max-w-5xl">
          {polaroids.map((polaroid, index) => (
          <motion.div
            key={index}
            initial={animationsEnabled ? { 
              y: -200, 
              rotate: polaroid.rotation + 180,
              opacity: 0,
              scale: 0.5
            } : {
              y: 0,
              rotate: polaroid.rotation,
              opacity: 1,
              scale: 1
            }}
            animate={{ 
              y: 0, 
              rotate: polaroid.rotation,
              opacity: 1,
              scale: 1
            }}
            transition={{ 
              duration: animationsEnabled ? 0.8 : 0,
              delay: animationsEnabled ? polaroid.delay : 0,
              type: 'spring',
              stiffness: 100,
              damping: 12
            }}
            className="relative group"
            data-testid={`polaroid-${index}`}
          >
            {/* Newspaper Clipping Frame */}
            <div 
              className="bg-background p-4 pb-16 shadow-lg border-2 border-foreground transform hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <div className="relative overflow-hidden border border-foreground" style={{ width: '220px', height: '220px' }}>
                <img
                  src={polaroid.src}
                  alt={polaroid.alt}
                  className="w-full h-full object-contain"
                  style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                />
              </div>
              
              {/* Newspaper Caption */}
              <div className="mt-4 text-center border-t-2 border-foreground pt-3">
                <p className="text-foreground font-serif text-4xl font-bold tracking-wide">
                  {polaroid.alt}
                </p>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      )}

      {/* Newspaper Announcement */}
      {showInvitation && (
        <motion.div
          initial={animationsEnabled ? { 
            y: 100, 
            opacity: 0,
            scale: 0.8,
            rotateX: -20
          } : {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0
          }}
          animate={{ 
            y: 0, 
            opacity: 1,
            scale: 1,
            rotateX: 0
          }}
          transition={{ 
            duration: animationsEnabled ? 1 : 0,
            delay: animationsEnabled ? 0.5 : 0,
            type: 'spring',
            stiffness: 80
          }}
          className="relative z-10 max-w-2xl w-full"
          data-testid="invitation-paper"
        >
          {/* Newspaper Announcement Box */}
          <div 
            className="relative bg-background p-8 md:p-12 shadow-lg border-4 border-foreground"
          >
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-foreground"/>
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-foreground"/>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-foreground"/>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-foreground"/>

            {/* Content */}
            <div className="text-center relative z-10">
              {/* Top Divider */}
              <div className="newspaper-double-line mb-6"></div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                You're Invited
              </motion.h2>

              {/* Ornamental Line */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-20 bg-foreground"/>
                <div className="w-2 h-2 bg-foreground mx-3"/>
                <div className="h-px w-20 bg-foreground"/>
              </div>

              <motion.p 
                className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-times"
                initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Come witness the moment we tie the knot and start our greatest adventure together
              </motion.p>

              <motion.div
                className="text-base md:text-lg text-foreground font-times"
                initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <p className="mb-2">with love, laughter,</p>
                <p>and a lifetime of memories</p>
              </motion.div>

              {/* Bottom Divider */}
              <div className="newspaper-double-line mt-6"></div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RusticInvitationReveal;
