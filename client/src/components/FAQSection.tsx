import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Can I bring someone with me?",
      icon: Users,
      answer: "To celebrate with you! To keep our wedding intimate, we kindly ask that only the number of seats indicated on your invitation be used. Thank you so much for understanding!"
    },
    {
      question: "UNPLUGGED CEREMONY",
      icon: Camera,
      answer: "The greatest gift you can give us is being fully present as we say 'I do.' We've hired professionals to capture this special moment, and we promise to share the photos as soon as we receive them. After the ceremony, please feel free to take as many photos and videos as you'd like!"
    },
    {
      question: "Is there a dress code?",
      icon: Users,
      answer: "We kindly request our guests to dress in Formal Attire with a color of our motif. Please see the Attire Section for details."
    },
    {
      question: "Is there parking available?",
      icon: Calendar,
      answer: "We are pleased to confirm that parking accommodations are available for all guests attending both the ceremony and the subsequent reception."
    },
    {
      question: "How do I RSVP?",
      icon: Clock,
      answer: "To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. Click here to confirm your attendance."
    }
  ];

  return (
    <motion.section 
      id="faq"
      className="section-pastel-blue py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;