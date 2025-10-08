import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

const Footer = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.footer 
      id="footer"
      className="bg-foreground text-background py-16 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={animationsEnabled ? { duration: 0.6 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.6, ease: "easeOut" } : { duration: 0 }}
        >
          {/* Closing Message */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              It's an honor to finally share our joy with you as we prepare to embark on our lifelong journey together.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              We've dreamt of this day, and now, with our hearts full of love and excitement, we can't wait to celebrate our marriage surrounded by the people who mean the most to us.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Your presence would truly make our wedding complete, and we eagerly anticipate creating unforgettable memories with each of you.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              See you there!
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-6">
              Love,
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-background"></div>
            <Heart className="w-6 h-6 text-background animate-float" />
            <div className="w-16 h-px bg-background"></div>
          </div>

          {/* Couple Names & Date */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-background" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Jerome
              <span className="text-background mx-3">&</span>
              Ericka
            </h2>
            <p className="text-background text-lg">
              August 15, 2026 • The Minor Basilica of Our Lady of the Rosary of Manaoag, Pangasinan
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;