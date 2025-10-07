import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import familyPhoto from "@assets/photo_2025-10-07_17-11-25_1759828380356.jpg";

import our_love_story from "@assets/our-love-story.jpg";

import lovestory_bottom from "@assets/lovestory-bottom.jpg";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { animationsEnabled } = useAnimationContext();

  useEffect(() => {
    const targetDate = new Date('August 15, 2026 14:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const padNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <motion.section 
      id="countdown" 
      className="section-pastel-blue py-16 px-4 relative z-0"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 2.5 } : { duration: 0 }}
    >
      <div className="max-w-5xl mx-auto text-center relative z-0">
        {/* Announcement */}
        <motion.div 
          className="mb-8"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <p className="text-base sm:text-lg font-bold mb-2" data-testid="text-announcement">
            Happy to announce that our Mommy and Daddy will tie the knot!
          </p>
          <p className="text-sm sm:text-base" data-testid="text-invitation-countdown">
            We invite you to witness and celebrate the beginning of our forever on:
          </p>
        </motion.div>

        {/* Wedding Date and Time */}
        <motion.div 
          className="mb-8"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.5 } : { duration: 0 }}
        >
          <p className="text-2xl sm:text-3xl font-bold tracking-wider mb-1" data-testid="text-wedding-date">
            AUGUST 15, 2026
          </p>
          <p className="text-xl sm:text-2xl" data-testid="text-wedding-time">
            2:00 PM
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="border-4 border-foreground inline-block px-8 py-6 mb-12 bg-background"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.7 } : { duration: 0 }}
        >
          <div className="flex gap-6 sm:gap-8 items-center justify-center">
            <div className="text-center" data-testid="countdown-days">
              <div className="text-5xl sm:text-6xl font-bold" style={{ fontFamily: "'Impact', sans-serif" }}>
                {timeLeft.days}
              </div>
            </div>
            <div className="text-4xl font-bold">:</div>
            <div className="text-center" data-testid="countdown-hours">
              <div className="text-5xl sm:text-6xl font-bold" style={{ fontFamily: "'Impact', sans-serif" }}>
                {padNumber(timeLeft.hours)}
              </div>
            </div>
            <div className="text-4xl font-bold">:</div>
            <div className="text-center" data-testid="countdown-minutes">
              <div className="text-5xl sm:text-6xl font-bold" style={{ fontFamily: "'Impact', sans-serif" }}>
                {padNumber(timeLeft.minutes)}
              </div>
            </div>
            <div className="text-4xl font-bold">:</div>
            <div className="text-center" data-testid="countdown-seconds">
              <div className="text-5xl sm:text-6xl font-bold" style={{ fontFamily: "'Impact', sans-serif" }}>
                {padNumber(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="newspaper-double-line my-12"></div>

        {/* Our Story Section */}
        <motion.div 
          className="mt-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.9 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-8" data-testid="text-our-story">
            OUR <span className="font-script italic">Story</span>
          </h2>

          {/* Family Photo */}
          <div className="max-w-3xl mx-auto mb-8 border-4 border-foreground p-2 bg-background">
            <img 
              src={our_love_story}
              alt="Our Family" 
              className="w-full h-auto"
              data-testid="img-family-photo"
            />
          </div>

          {/* Story Title */}
          <h3 className="text-3xl sm:text-4xl font-script italic mb-6" data-testid="text-story-names">
            Jerome and Ericka
          </h3>

          {/* Story Text */}
          <div className="max-w-4xl mx-auto text-left space-y-4 text-sm sm:text-base leading-relaxed px-4">
            <p data-testid="text-story-paragraph-1">
              Our love story began not with sudden passion, but with a deep friendship developed in the academic setting of 2017. Ericka was a vibrant social butterfly, radiating joy and laughter, while Jerome complemented her with his quiet charm and understanding nature. Together, they experienced a formative bond during their school years, sharing meaningful moments that revealed an unrecognized depth to their connection.
            </p>
            <p data-testid="text-story-paragraph-2">
              As time passed, life led them on separate paths, culminating in a chance reunion in 2015, where the nostalgia awakened a buried spark between them. They no longer viewed each other merely as friends, but as essential companions. Their first date crystallized their feelings, unveiling a matured adoration that balanced Ericka's lively spirit with Jerome's calm demeanor, showcasing a harmonious blend of chaos and stability.
            </p>
            <p data-testid="text-story-paragraph-3">
              The couple's journey encountered challenges, especially with the arrival of their children, Princess Jennae in 2017 and Prince Mavi in 2022. Parenthood brought both joy and immense stress, testing their relationship to its limits. In these challenging times, their friendship foundation shone through, demonstrating their ability to survive hardships and emerge resilient. Their children symbolize the couple's commitment and love, affirming their dedication to overcoming adversity together.
            </p>
            <p data-testid="text-story-paragraph-4">
              By October 2024, amidst the exhilaration of a Ne-Yo concert, Jerome proposed, symbolizing their journey, love, and dedication to each other. This moment encapsulated the excitement and promise they have built together. As they embark on this new chapter, they envision a future of shared adventures with their children and a continued embrace of life's beautiful chaos, grateful for the unwavering support of their family and friends who remind them that true love is fortified by community and shared encouragement.
            </p>
          </div>

          {/* Family Photos Grid */}
          <div className="max-w-4xl mx-auto mt-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Photo 1 */}
              <div className="border-4 border-foreground p-2 bg-background">
                <img 
                  src={lovestory_bottom}
                  alt="Family Photo 1" 
                  className="w-full h-auto"
                  data-testid="img-story-photo-1"
                />
              </div>

              {/* Photo 2 */}
              <div className="border-4 border-foreground p-2 bg-background">
                <img 
                  src={familyPhoto}
                  alt="Family Photo 2" 
                  className="w-full h-auto"
                  data-testid="img-story-photo-2"
                />
              </div>
            </div>
          </div>

          {/* Bottom Decorative Double Line */}
          <div className="newspaper-double-line mt-8"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CountdownSection;
