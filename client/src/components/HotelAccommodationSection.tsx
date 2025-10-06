import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { ExternalLink, Hotel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import deluxeDoubleRoom from '@assets/image_1759767327319.png';
import deluxeKingRoom from '@assets/image_1759767340119.png';
import executiveSuite from '@assets/image_1759767351462.png';

const HotelAccommodationSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const rooms = [
    {
      name: 'Deluxe Double Room',
      image: deluxeDoubleRoom,
      description: 'Sleeps 4 • 2 Double beds • 1 Bathroom'
    },
    {
      name: 'Deluxe King Room',
      image: deluxeKingRoom,
      description: 'Sleeps 2 • 1 King bed • 1 Bathroom'
    },
    {
      name: 'Executive Suite with Bathtub',
      image: executiveSuite,
      description: 'Sleeps 2 • 1 King bed • 1 Bathroom'
    }
  ];

  return (
    <motion.section 
      id="hotel-accommodation" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 9.5 } : { duration: 0 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 9.8 } : { duration: 0 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-primary/20 border-2 border-primary">
            <Hotel className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-8" data-testid="text-hotel-title">
            Hotel Accommodation
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground leading-relaxed">
            <p className="font-serif">
              We are delighted to invite you to join us in celebrating our wedding. For your convenience regarding hotel accommodation, we have made arrangements with The Monarch Hotel.
            </p>
            <p className="font-serif">
              You have two options for booking your stay:
            </p>
          </div>
        </motion.div>

        {/* Booking Options */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.1 } : { duration: 0 }}
        >
          {/* Book with Us */}
          <div className="bg-card/30 border-2 border-primary/30 rounded-xl p-8 shadow-soft hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-book-with-us">
              Book with Us
            </h3>
            <p className="text-base text-foreground leading-relaxed">
              To take advantage of our special wedding discounted rate, please inform us that you would like to book your room as part of our group. We will handle the reservation process for you to ensure you receive the preferred pricing.
            </p>
          </div>

          {/* Book Directly */}
          <div className="bg-card/30 border-2 border-primary/30 rounded-xl p-8 shadow-soft hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4" data-testid="text-book-directly">
              Book Directly with The Monarch Hotel
            </h3>
            <p className="text-base text-foreground leading-relaxed mb-4">
              Should you prefer to book your accommodation directly, you may do so by visiting the hotel's website:
            </p>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              data-testid="button-hotel-website"
            >
              <a 
                href="https://www.themonarchhotel.com.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                Visit Hotel Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Room Previews */}
        <motion.div 
          className="mb-8"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.4 } : { duration: 0 }}
        >
          <h3 className="text-3xl font-serif font-bold text-foreground text-center mb-8" data-testid="text-room-previews">
            Room Previews
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="bg-card/20 border border-primary/20 rounded-xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, delay: 10.7 + (index * 0.2) } : { duration: 0 }}
                data-testid={`card-room-${index}`}
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h4 className="text-xl font-serif font-bold text-foreground mb-2" data-testid={`text-room-name-${index}`}>
                    {room.name}
                  </h4>
                  <p className="text-sm text-foreground/70" data-testid={`text-room-description-${index}`}>
                    {room.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-8"
          initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={animationsEnabled ? { duration: 0.8, delay: 11.5 } : { duration: 0 }}
        >
          <p className="text-base text-foreground/80 italic" data-testid="text-hotel-footer-note">
            Please visit their website for full prices and details.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HotelAccommodationSection;
