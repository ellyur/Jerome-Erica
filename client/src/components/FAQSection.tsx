import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Heart, Bell, Camera, Home, Utensils, PartyPopper } from 'lucide-react';

const FAQSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const timelineEvents = [
    { time: 'ASSEMBLY', icon: Heart },
    { time: 'CEREMONY', icon: Bell },
    { time: 'PHOTOS', icon: Camera },
    { time: 'RECEPTION', icon: Home },
    { time: 'DINNER', icon: Utensils },
    { time: 'PARTY', icon: PartyPopper },
  ];

  const faqs = [
    {
      question: "NO BRINGING OF ADDITIONAL BEYOND THE RESERVED SEAT/S",
      answer: "We're so excited to celebrate with you! To keep our wedding intimate, we kindly ask that only the number of seats indicated on your invitation be used. Thank you so much for understanding!"
    },
    {
      question: "UNPLUGGED CEREMONY",
      answer: "The greatest gift you can give us is being fully present as we say 'I do.' We've hired professionals to capture this special moment, and we promise to share the photos as soon as we receive them. After the ceremony, please feel free to take as many photos and videos as you'd like!"
    },
    {
      question: "IS THERE A DRESS CODE?",
      answer: "We kindly request our guests to dress in Formal Attire with a color of our motif. Please see the Attire Section for details."
    },
    {
      question: "IS THERE PARKING AVAILABLE?",
      answer: "We are pleased to confirm that parking accommodations are available for all guests attending both the ceremony and the subsequent reception."
    }
  ];

  return (
    <motion.section 
      id="faq"
      className="section-pastel-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 11.5 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* How do I RSVP Section */}
        <motion.div 
          className="mb-16 text-center max-w-3xl mx-auto bg-muted/20 p-8 rounded-lg"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.6 } : { duration: 0 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-muted/30 py-2" data-testid="text-rsvp-question">
            HOW DO I RSVP?
          </h3>
          <p className="text-sm sm:text-base mb-4" data-testid="text-rsvp-answer">
            To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. <span className="underline cursor-pointer">Click here</span> to confirm your attendance.
          </p>
        </motion.div>

        {/* Wedding Timeline */}
        <motion.div 
          className="mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.8 } : { duration: 0 }}
        >
          {/* Black Header Bar */}
          <div className="bg-foreground py-4 px-8 mb-12 text-center">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-wedding-timeline-title"
            >
              <span className="font-script italic">Wedding</span> Timeline
            </h2>
          </div>

          <p className="text-center text-sm sm:text-base mb-12" data-testid="text-timeline-intro">
            Here's how it's gonna go down
          </p>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground hidden md:block"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between md:justify-center gap-8 relative"
                  initial={animationsEnabled ? { opacity: 0, x: index % 2 === 0 ? -30 : 30 } : { opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={animationsEnabled ? { duration: 0.6, delay: 12 + (index * 0.1) } : { duration: 0 }}
                  data-testid={`timeline-event-${index}`}
                >
                  {/* Left Side - Event Name (alternating) */}
                  <div className={`flex-1 text-right ${index % 2 === 0 ? 'md:block' : 'md:hidden'}`}>
                    <p className="text-lg sm:text-xl font-bold tracking-wider" data-testid={`text-timeline-${index}`}>
                      {event.time}
                    </p>
                  </div>

                  {/* Center - Icon */}
                  <div className="w-16 h-16 bg-background border-4 border-foreground rounded-full flex items-center justify-center z-10 flex-shrink-0">
                    <event.icon className="w-8 h-8 text-foreground" strokeWidth={2} />
                  </div>

                  {/* Right Side - Event Name (alternating) */}
                  <div className={`flex-1 text-left ${index % 2 === 1 ? 'md:block' : 'md:hidden'} hidden md:block`}>
                    <p className="text-lg sm:text-xl font-bold tracking-wider">
                      {event.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-muted/20 p-6 rounded-lg"
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 12.6 + (index * 0.1) } : { duration: 0 }}
              data-testid={`faq-item-${index}`}
            >
              <h3 className="text-base sm:text-lg font-bold mb-3 bg-muted/30 py-2 px-4" data-testid={`faq-question-${index}`}>
                {faq.question}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed px-4" data-testid={`faq-answer-${index}`}>
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
