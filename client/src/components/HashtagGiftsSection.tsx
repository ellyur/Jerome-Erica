import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { TypeAnimation } from 'react-type-animation';

const HashtagGiftsSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue py-4 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={animationsEnabled ? { duration: 0.6 } : { duration: 0 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Gift Guide Section */}
        <motion.div 
          className="text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut" } : { duration: 0 }}
        >
          {/* Black Header Bar */}
          <div className="bg-foreground py-4 px-8 mb-8">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-gift-guide-title"
            >
              GIFT <span className="font-script italic">Guide</span>
            </h2>
          </div>

          {/* Gift Icon */}
          <div className="flex justify-center mb-8">
            <Gift className="w-20 h-20 sm:w-24 sm:h-24 text-foreground" strokeWidth={1.5} data-testid="icon-gift" />
          </div>

          {/* Gift Message */}
          <div className="max-w-2xl mx-auto border-t-2 border-b-2 border-foreground py-6 mb-8 px-4">
            <p 
              className="text-sm sm:text-base leading-relaxed italic"
              data-testid="text-gifts-message"
            >
              With all that we have, we've been truly blessed. Your presence and prayers are all that we request. But if you desire to give nonetheless, monetary gift is one we humbly request.
            </p>
          </div>
        </motion.div>

        {/* Capture Our Moments Section */}
        <motion.div 
          className="text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 0.2 } : { duration: 0 }}
        >
          {/* Black Header Bar */}
          <div className="bg-foreground py-4 px-8 mb-8">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-capture-moments-title"
            >
              <span className="font-script italic">Capture our</span> Moments!
            </h2>
          </div>

          {/* Camera Icon */}
          <div className="flex justify-center mb-8">
            <Camera className="w-20 h-20 sm:w-24 sm:h-24 text-foreground" strokeWidth={1.5} data-testid="icon-camera" />
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto border-t-2 border-b-2 border-foreground py-6 mb-4 px-4">
            <p 
              className="text-sm sm:text-base leading-relaxed"
              data-testid="text-capture-description"
            >Capture the love after our unplugged ceremony! Share your wedding photos using our official wedding hashtag</p>
          </div>

          {/* Hashtag */}
          <div 
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide sm:tracking-wider break-words px-4"
            data-testid="text-hashtag"
          >
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  '#UnbERICKAbleLoveWithJEROME',
                  5000,
                  '',
                  0,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            ) : (
              '#UnbERICKAbleLoveWithJEROME'
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
