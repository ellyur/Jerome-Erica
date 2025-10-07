import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import deluxeKingRoom from '@assets/deluxe-single_1759831717446.png';
import deluxeDoubleRoom from '@assets/deluxe-doublebed_1759831717447.png';
import executiveSuite from '@assets/executive_1759831717446.png';

const HotelAccommodationSection = () => {
  const { animationsEnabled } = useAnimationContext();

  const rooms = [
    {
      name: 'Deluxe Room (King Bed):',
      regularPrice: '₱10,500',
      discountedPrice: '₱5,000/night',
      image: deluxeKingRoom,
    },
    {
      name: 'Deluxe Double Room (Two Beds):',
      regularPrice: '',
      discountedPrice: '₱10,200/night',
      image: deluxeDoubleRoom,
    },
    {
      name: 'Executive Suite:',
      regularPrice: '₱20,00',
      discountedPrice: '₱14,200/night',
      image: executiveSuite,
    }
  ];

  return (
    <motion.section 
      id="hotel-accommodation" 
      className="section-pastel-blue py-20 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 9.5 } : { duration: 0 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Black Header Bar */}
        <div className="text-center mb-12">
          <div className="bg-foreground py-4 px-8 mb-8">
            <h2 
              className="text-3xl sm:text-4xl text-background"
              data-testid="text-hotel-accommodation-title"
            >
              <span className="font-script italic">Hotel</span> ACCOMMODATION
            </h2>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-sm sm:text-base mb-8" data-testid="text-hotel-intro">
            We are delighted to invite you to join us in celebrating our wedding. For your convenience regarding <strong>hotel accommodation</strong>, we have made arrangements with <strong>The Monarch Hotel.</strong>
          </p>
          <p className="text-sm sm:text-base mb-8" data-testid="text-booking-options">
            You have two options for booking your stay:
          </p>
        </div>

        {/* Booking Options */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {/* Option 1 */}
          <motion.div 
            className="text-left"
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.1 } : { duration: 0 }}
          >
            <div className="flex items-start gap-4 mb-2">
              <div className="bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3" data-testid="text-book-with-us">
                  BOOK WITH US
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" data-testid="text-book-with-us-description">
                  To take advantage of our special wedding discounted rate, please inform us that you would like to book your room as part of our group. We will handle the reservation process for you to ensure you receive the preferred pricing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Option 2 */}
          <motion.div 
            className="text-left"
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 10.3 } : { duration: 0 }}
          >
            <div className="flex items-start gap-4 mb-2">
              <div className="bg-foreground text-background rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3" data-testid="text-book-directly">
                  BOOK DIRECTLY WITH THE MONARCH HOTEL
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4" data-testid="text-book-directly-description">
                  Should you prefer to book your accommodation directly, you may do so by visiting the hotel's website:
                </p>
                <a
                  href="https://www.themonarchhotel.com.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  data-testid="button-hotel-website"
                >
                  <button className="bg-foreground text-background px-8 py-3 font-bold tracking-wider hover:bg-foreground/90 transition-colors rounded-full text-sm uppercase">
                    THE MONARCH HOTEL
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Royal Accommodation Arrangement */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8" data-testid="text-royal-accommodation">
            ROYAL ACCOMMODATION ARRANGEMENT
          </h3>
          <p className="text-center text-sm sm:text-base mb-8 max-w-3xl mx-auto" data-testid="text-accommodation-intro">
            In celebration of our union, we've arranged special accommodation rates for your convenience:
          </p>

          {/* Room Types Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={animationsEnabled ? { duration: 0.6, delay: 10.7 + (index * 0.2) } : { duration: 0 }}
                data-testid={`card-room-${index}`}
              >
                {/* Room Image with Border */}
                <div className="border-4 border-foreground p-2 bg-background mb-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-48 object-cover"
                    data-testid={`img-room-${index}`}
                  />
                </div>

                {/* Room Name */}
                <p className="font-bold text-lg mb-2" data-testid={`text-room-name-${index}`}>
                  {room.name}
                </p>

                {/* Pricing */}
                <p className="text-base" data-testid={`text-room-price-${index}`}>
                  {room.regularPrice && (
                    <>
                      <span className="line-through text-muted-foreground">(reg. {room.regularPrice})</span>
                      <br />
                    </>
                  )}
                  <span className="font-bold">{room.discountedPrice}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-muted/30 p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-center leading-relaxed" data-testid="text-room-details">
              <em>Each room rate includes breakfast and is good for up 2 Adults and 2 Children. If there are no children and room will be occupied by 4 adults, an additional ₱hp 1,500 per extra adult will apply (for any room type)</em>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HotelAccommodationSection;
