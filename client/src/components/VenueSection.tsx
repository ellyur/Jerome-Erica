import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import ceremonyImg from '@assets/ceremony_1759763680810.png';
import receptionImg from '@assets/reception_1759763680809.png';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const venues = [
    {
      type: 'Ceremony',
      title: 'THE MINOR BASILICA',
      subtitle: 'OF OUR LADY OF THE ROSARY',
      location: 'OF MANAOAG',
      image: ceremonyImg,
      mapUrl: 'https://maps.app.goo.gl/moVZ5NyKG2HCNpLx5',
    },
    {
      type: 'Reception',
      title: 'THE MONARCH HOTEL',
      subtitle: 'CALASIAO PANGASINAN',
      location: '',
      image: receptionImg,
      mapUrl: 'https://maps.app.goo.gl/DNUNeTCG8wpqaauZ9',
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-4 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Black Header Bar */}
          <div className="bg-foreground py-4 px-8 mb-12">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-finer-details-title"
            >
              <span className="font-script italic">Finer</span> DETAILS
            </h2>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.type}
              className="text-center"
              initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 6.8 + (index * 0.3) } : { duration: 0 }}
              data-testid={`section-${venue.type.toLowerCase()}`}
            >
              {/* Venue Image with Border */}
              <div className="border-4 border-foreground p-2 bg-background mb-6">
                <img
                  src={venue.image}
                  alt={`${venue.type} Venue`}
                  className="w-full h-64 object-cover"
                  data-testid={`img-${venue.type.toLowerCase()}-venue`}
                />
              </div>

              {/* Venue Type */}
              <h3 
                className="text-3xl sm:text-4xl font-script italic mb-4"
                data-testid={`text-${venue.type.toLowerCase()}-type`}
              >
                {venue.type}
              </h3>

              {/* Venue Title */}
              <p 
                className="text-lg sm:text-xl font-bold tracking-wider mb-1"
                data-testid={`text-${venue.type.toLowerCase()}-title`}
              >
                {venue.title}
              </p>

              {/* Venue Subtitle */}
              {venue.subtitle && (
                <p 
                  className="text-base sm:text-lg font-bold tracking-wide mb-1"
                  data-testid={`text-${venue.type.toLowerCase()}-subtitle`}
                >
                  {venue.subtitle}
                </p>
              )}

              {/* Venue Location */}
              {venue.location && (
                <p 
                  className="text-base sm:text-lg font-bold tracking-wide mb-4"
                  data-testid={`text-${venue.type.toLowerCase()}-location`}
                >
                  {venue.location}
                </p>
              )}

              {/* Map Button */}
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
                data-testid={`button-${venue.type.toLowerCase()}-map`}
              >
                <button className="bg-foreground text-background px-8 py-3 font-bold tracking-wider hover:bg-foreground/90 transition-colors rounded-full">
                  click here to view map
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default VenueSection;
