import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Sparkles, Star, Ship, Heart, Infinity, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import proposalImg from '@assets/hero-section_1759763807537.jpg';

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [showFullStory, setShowFullStory] = useState(false);

  const fullStory = "Our love story began not with sudden passion, but with a deep friendship developed in the academic setting of 2017. Ericka was a vibrant social butterfly, radiating joy and laughter, while Jerome complemented her with his quiet charm and understanding nature. Together, they experienced a formative bond during their school years, sharing meaningful moments that revealed an unrecognized depth to their connection.\n\nAs time passed, life led them on separate paths, culminating in a chance reunion in 2015, where the nostalgia awakened a buried spark between them. They no longer viewed each other merely as friends, but as essential companions. Their first date crystallized their feelings, unveiling a matured adoration that balanced Ericka's lively spirit with Jerome's calm demeanor, showcasing a harmonious blend of chaos and stability.\n\nThe couple's journey encountered challenges, especially with the arrival of their children, Princess Jennae in 2017 and Prince Mavi in 2022. Parenthood brought both joy and immense stress, testing their relationship to its limits. In these challenging times, their friendship foundation shone through, demonstrating their ability to survive hardships and emerge resilient. Their children symbolize the couple's commitment and love, affirming their dedication to overcoming adversity together.\n\nBy October 2024, amidst the exhilaration of a Ne-Yo concert, Jerome proposed, symbolizing their journey, love, and dedication to each other. This moment encapsulated the excitement and promise they have built together. As they embark on this new chapter, they envision a future of shared adventures with their children and a continued embrace of life's beautiful chaos, grateful for the unwavering support of their family and friends who remind them that true love is fortified by community and shared encouragement.";

  const storyCards = [
    {
      id: 1,
      title: "Academic Beginnings",
      text: "Our love story began in 2017 as a deep friendship in school. Ericka, a vibrant social butterfly radiating joy, and Jerome, with his quiet charm and understanding nature, shared formative moments that revealed an unrecognized depth to their connection.",
      image: '/images/prenupphotos3_1759760761699.jpg',
      icon: Sparkles
    },
    {
      id: 2, 
      title: "The Reunion",
      text: "Life led them on separate paths, but a chance reunion awakened a buried spark. They no longer viewed each other merely as friends, but as essential companions whose first date unveiled a matured adoration.",
      image: '/images/hero-section_1759760761701.jpg',
      icon: Star
    },
    {
      id: 3,
      title: "Love Blossoms", 
      text: "Their connection balanced Ericka's lively spirit with Jerome's calm demeanor, showcasing a harmonious blend of chaos and stability. What began as friendship had transformed into something beautiful.",
      image: '/images/prenupphotos2_1759760761700.jpg',
      icon: Ship
    },
    {
      id: 4,
      title: "Parenthood Journey",
      text: "With Princess Jennae in 2017 and Prince Mavi in 2022, parenthood brought joy and challenges. Their friendship foundation helped them survive hardships and emerge resilient, their children symbolizing their unwavering commitment.",
      image: '/images/prenupphotos1_1759760761700.jpg',
      icon: Heart
    },
    {
      id: 5,
      title: "The Proposal",
      text: "In October 2024, amidst the exhilaration of a Ne-Yo concert, Jerome proposed. This moment encapsulated their journey, love, and dedication, marking the beginning of their forever together.",
      image: proposalImg,
      icon: Infinity
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="section-hard-blue relative py-16 px-4 sm:px-6 lg:px-8"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* SVG Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 right-20 w-24 h-24 text-primary-foreground/30 animate-pulse" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
        </svg>

        <svg className="absolute bottom-32 left-16 w-16 h-16 text-primary-foreground/20 animate-bounce" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
          <path fill="currentColor" d="M9,11H15L13,13L15,15H9L11,13L9,11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"/>
        </svg>
      </div>
      
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 text-foreground" data-testid="text-story-title">
            Our love story
          </h2>
        </motion.div>
      </div>

      {/* Story Cards - Vertical Layout */}
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {storyCards.map((card, index) => (
          <motion.div
            key={card.id}
            className="story-card"
            initial={animationsEnabled ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div 
              className="relative overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 transition-all duration-300 bg-black/5 dark:bg-white/5 border border-white/10 backdrop-blur-sm"
              style={{
                background: mousePosition[card.id] 
                  ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02) 40%), rgba(0, 0, 0, 0.05)`
                  : 'rgba(0, 0, 0, 0.05)'
              }}
              onMouseMove={(e) => handleMouseMove(e, card.id)}
              onMouseLeave={() => handleMouseLeave(card.id)}
              data-testid={`card-story-${card.id}`}
            >
              {/* Flower Decorations */}
              <img src="/images/flower3_1759741371015.png" alt="" className="absolute top-2 left-2 w-12 sm:w-16 md:w-20 opacity-80 pointer-events-none" />
              <img src="/images/flower5_1759741371013.png" alt="" className="absolute bottom-2 right-2 w-16 sm:w-20 md:w-24 opacity-80 pointer-events-none transform rotate-12" />
              <img src="/images/flower7_1759741371011.png" alt="" className="absolute top-2 right-2 w-10 sm:w-12 md:w-16 opacity-70 pointer-events-none transform -rotate-12" />
              
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}>
                {/* Content */}
                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 bg-primary/20 border-2 border-primary">
                    <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-foreground" data-testid={`text-story-card-${card.id}-text`}>
                    {card.text}
                  </p>

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-primary-foreground/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-md mx-auto relative">
                    <img
                      src={card.image}
                      alt={`Story moment ${index + 1}`}
                      className="w-full h-full object-contain rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Final "Our Promise" Section */}
        <motion.div
          className="story-card text-center py-12 sm:py-16"
          initial={animationsEnabled ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto relative">
            {/* Background SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
              <defs>
                <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="hsl(var(--primary-foreground))" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
            </svg>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-primary" data-testid="text-story-vow-title">
                Our Promise
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed italic mb-4 text-foreground">
                  "Everything's better when we are together"
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-foreground/80">
                  - Jerome and Ericka
                </p>
              </div>
              
              {/* Read Full Story Button */}
              <Button 
                onClick={() => setShowFullStory(true)}
                className="mt-8 bg-primary/20 hover:bg-primary/30 text-primary border-2 border-primary text-base sm:text-lg px-6 py-3"
                data-testid="button-read-full-story"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Full Story
              </Button>
              
              {/* SVG Hearts decoration */}
              <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                <div className="w-16 sm:w-24 h-px bg-primary/60"></div>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                <div className="w-16 sm:w-24 h-px bg-primary/60"></div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={showFullStory} onOpenChange={setShowFullStory}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-primary">Our Complete Love Story</DialogTitle>
            <DialogDescription className="sr-only">The complete love story of Jerome and Ericka</DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground">
            {fullStory.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default StorySection;
