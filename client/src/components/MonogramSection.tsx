import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import monogramImage from '@assets/Your_paragraph_text-removebg-preview_1760098096041.png';

const MonogramSection = () => {
  const { animationsEnabled } = useAnimationContext();

  return (
    <motion.section 
      className="bg-background py-16 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={animationsEnabled ? { duration: 0.8 } : { duration: 0 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex justify-center"
          initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut" } : { duration: 0 }}
        >
          <img 
            src={monogramImage} 
            alt="Jerome & Ericka Monogram" 
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
            data-testid="img-monogram"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MonogramSection;
