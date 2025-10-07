import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Heart, Bell, Camera, Home, Utensils, PartyPopper, CameraIcon } from 'lucide-react';

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
        {/* Camera Icon Section */}
        <motion.div 
          className="mb-12 text-center"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.5 } : { duration: 0 }}
        >
          <div className="flex justify-center mb-4">
            <Camera className="w-16 h-16 sm:w-20 sm:h-20 text-foreground" strokeWidth={1.5} />
          </div>
          <p className="text-sm sm:text-base leading-relaxed italic mb-2">
            Capture the love after our unplugged ceremony!
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-2">
            Share you wedding photos using our official wedding hashtag
          </p>
          <p className="text-base sm:text-lg font-bold">
            #UnbERICKAbleLoveWithJEROME
          </p>
        </motion.div>

        {/* Frequently Asked Questions Header */}
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 11.7 } : { duration: 0 }}
        >
          <div className="bg-foreground py-4 px-8 text-center">
            <h2 
              className="text-2xl sm:text-3xl text-background font-script italic"
              data-testid="text-faq-title"
            >
              Frequently Asked Questions
            </h2>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.6, ease: "easeOut", delay: 11.9 + (index * 0.1) } : { duration: 0 }}
              data-testid={`faq-item-${index}`}
            >
              <div className="bg-foreground py-3 px-4 sm:px-6">
                <h3 className="text-sm sm:text-base font-bold text-background" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </h3>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <p className="text-sm sm:text-base leading-relaxed" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How do I RSVP Section - matching FAQ design */}
        <motion.div 
          className="mb-16 max-w-4xl mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 12.3 } : { duration: 0 }}
        >
          <div className="bg-foreground py-3 px-4 sm:px-6">
            <h3 className="text-sm sm:text-base font-bold text-background" data-testid="text-rsvp-question">
              HOW DO I RSVP?
            </h3>
          </div>
          <div className="py-4 px-4 sm:px-6">
            <p className="text-sm sm:text-base leading-relaxed" data-testid="text-rsvp-answer">
              To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. <span className="underline cursor-pointer">Click here</span> to confirm your attendance.
            </p>
          </div>
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
            {/* Vertical Line - centered on mobile and desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground"></div>

            {/* Timeline Events */}
            <div className="space-y-8 md:space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center gap-4 md:gap-8 relative"
                  initial={animationsEnabled ? { opacity: 0, x: index % 2 === 0 ? -30 : 30 } : { opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={animationsEnabled ? { duration: 0.6, delay: 12 + (index * 0.1) } : { duration: 0 }}
                  data-testid={`timeline-event-${index}`}
                >
                  {/* Left Side - Event Name or Icon (alternating) */}
                  <div className="flex-1 flex justify-end items-center">
                    {index % 2 === 0 ? (
                      <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-right" data-testid={`text-timeline-${index}`}>
                        {event.time}
                      </p>
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background border-2 sm:border-4 border-foreground flex items-center justify-center z-10">
                        <event.icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>

                  {/* Center Dot */}
                  <div className="w-3 h-3 bg-foreground rounded-full z-10 flex-shrink-0"></div>

                  {/* Right Side - Icon or Event Name (alternating) */}
                  <div className="flex-1 flex justify-start items-center">
                    {index % 2 === 1 ? (
                      <p className="text-base sm:text-lg md:text-xl font-bold tracking-wider text-left" data-testid={`text-timeline-${index}`}>
                        {event.time}
                      </p>
                    ) : (
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background border-2 sm:border-4 border-foreground flex items-center justify-center z-10">
                        <event.icon className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" strokeWidth={1.5} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom dot */}
            <div className="flex justify-center mt-4">
              <div className="w-3 h-3 bg-foreground rounded-full"></div>
            </div>
          </div>

          </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
