import { motion } from 'framer-motion';
import principalSponsorsImg from '@assets/principal sponsors_1759763680808.png';
import guestsImg from '@assets/guests_1759763680809.png';

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute top-4 right-1/4 w-4 h-4 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-0 left-1/3 w-6 h-6 border border-primary/40 rounded-full"></div>
          <div className="absolute bottom-2 right-1/3 w-3 h-3 bg-primary/30 rounded-full"></div>

          <h2 className="font-serif text-gold mb-8 text-5xl md:text-6xl font-bold tracking-wide" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
          <div className="bg-white/5 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto relative">
            <div className="space-y-6">
              <div>
                <p className="text-xl font-serif font-bold text-foreground mb-3">
                  Principal Sponsors
                </p>
                <div className="space-y-1">
                  <p className="text-base text-foreground">
                    <span className="font-semibold">Gentlemen:</span> Black Suit with Maroon Necktie
                  </p>
                  <p className="text-base text-foreground">
                    <span className="font-semibold">Ladies:</span> Maroon Dress with Touch of Gold
                  </p>
                </div>
              </div>
              <div className="border-t border-primary/30 pt-4">
                <p className="text-xl font-serif font-bold text-foreground mb-3">
                  Guests
                </p>
                <div className="space-y-1">
                  <p className="text-base text-foreground">
                    <span className="font-semibold">Gentlemen:</span> Black Suit with Maroon Necktie
                  </p>
                  <p className="text-base text-foreground">
                    <span className="font-semibold">Ladies:</span> Maroon Dress with Touch of Gold
                  </p>
                </div>
              </div>
              <div className="border-t border-primary/30 pt-4">
                <p className="text-base text-foreground italic">
                  We would love to see you dress according to our color palette.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-2xl font-body font-semibold text-foreground mb-4 relative z-10">
                      FOR PRINCIPAL SPONSORS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImg}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-2xl font-body font-semibold text-foreground mb-4 relative z-10">
                      FOR GUESTS
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">ALL BLACK</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImg}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DressCodeSection;
