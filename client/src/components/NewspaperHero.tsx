import heroPhoto from "@assets/photo_2025-10-07_17-37-04_1759829841162.jpg";

const NewspaperHero = () => {
  return (
    <section 
      className="newspaper-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4"
      style={{ backgroundColor: '#f5f1e8' }}
    >
      <div className="relative z-10 max-w-5xl w-full" style={{ color: '#1c1c1c' }}>
        {/* Top Header Bar */}
        <div className="flex justify-between items-center mb-3 text-xs sm:text-sm uppercase" data-testid="header-bar" style={{ fontWeight: 500, letterSpacing: '0.1em' }}>
          <span data-testid="text-couple-names-header">JEROME & ERICKA</span>
          <span data-testid="text-wedding-date-header">08.15.2026</span>
        </div>

        {/* Decorative Double Line */}
        <div className="mb-4" style={{ borderTop: '2px solid #1c1c1c', borderBottom: '2px solid #1c1c1c', padding: '2px 0' }}>
          <div style={{ height: '1px', backgroundColor: '#1c1c1c' }}></div>
        </div>

        {/* The Newlywed Times Title with Ornaments */}
        <div className="text-center mb-4">
          {/* Top Ornament */}
          <div className="flex items-center justify-center mb-3">
            <svg className="w-24 h-10 sm:w-32 sm:h-12" viewBox="0 0 120 40" fill="none">
              <path d="M5 20 C 20 8, 40 8, 60 20 S 100 32, 115 20" stroke="#1c1c1c" strokeWidth="1.5" fill="none"/>
              <path d="M10 25 C 25 15, 45 15, 60 25 S 95 35, 110 25" stroke="#1c1c1c" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="20" r="3" fill="#1c1c1c"/>
            </svg>
          </div>
          
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-3"
            style={{ 
              fontFamily: "'UnifrakturMaguntia', 'Old English Text MT', serif",
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}
            data-testid="text-newspaper-title"
          >
            The Newlywed Times
          </h1>

          {/* Bottom Ornament */}
          <div className="flex items-center justify-center">
            <svg className="w-24 h-10 sm:w-32 sm:h-12" viewBox="0 0 120 40" fill="none">
              <path d="M5 20 C 20 32, 40 32, 60 20 S 100 8, 115 20" stroke="#1c1c1c" strokeWidth="1.5" fill="none"/>
              <path d="M10 15 C 25 25, 45 25, 60 15 S 95 5, 110 15" stroke="#1c1c1c" strokeWidth="1" fill="none"/>
              <circle cx="60" cy="20" r="3" fill="#1c1c1c"/>
            </svg>
          </div>
        </div>

        {/* Decorative Double Line */}
        <div className="mb-8" style={{ borderTop: '2px solid #1c1c1c', borderBottom: '2px solid #1c1c1c', padding: '2px 0' }}>
          <div style={{ height: '1px', backgroundColor: '#1c1c1c' }}></div>
        </div>

        {/* Main Photo with Double Border */}
        <div className="mb-6 max-w-3xl mx-auto" style={{ border: '3px solid #1c1c1c', padding: '8px', backgroundColor: '#f5f1e8' }}>
          <div style={{ border: '1px solid #1c1c1c', padding: '4px' }}>
            <img 
              src={heroPhoto}
              alt="Jerome and Ericka" 
              className="w-full h-auto"
              style={{ filter: 'grayscale(100%)' }}
              data-testid="img-couple-hero"
            />
          </div>
        </div>

        {/* Couple Names */}
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl text-center mb-3"
          style={{ 
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.3em',
            lineHeight: 1.1
          }}
          data-testid="text-couple-names-main"
        >
          JEROME <span style={{ fontFamily: "'Times New Roman', serif", fontWeight: 400 }}>&</span> ERICKA
        </h2>

        {/* Main Headline */}
        <h3 
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-5"
          style={{ 
            fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.2em',
            lineHeight: 1.1
          }}
          data-testid="text-getting-married"
        >
          ARE GETTING MARRIED!
        </h3>

        {/* Decorative Line */}
        <div className="mb-5 max-w-4xl mx-auto" style={{ borderTop: '1px solid #1c1c1c' }}></div>

        {/* Subheading - Small Caps */}
        <p 
          className="text-center text-xs sm:text-sm mb-6 max-w-3xl mx-auto uppercase"
          style={{ 
            fontWeight: 500,
            letterSpacing: '0.25em',
            lineHeight: 1.4
          }}
          data-testid="text-celebration-message"
        >
          JOIN US IN CELEBRATING A UNION OF LOVE, LAUGHTER, AND HAPPINESS
        </p>

        {/* Welcome Message - Italic Serif Quote */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p 
            className="text-sm italic"
            style={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontWeight: 400,
              lineHeight: 1.6,
              fontStyle: 'italic'
            }}
            data-testid="text-welcome-message"
          >
            "Everything's better when we are together"
          </p>
          <p 
            className="text-xs mt-2 uppercase"
            style={{ 
              fontWeight: 400,
              letterSpacing: '0.1em'
            }}
            data-testid="text-quote-attribution"
          >
            - Jerome and Ericka
          </p>
        </div>

        {/* Welcome Text Below Quote */}
        <div className="max-w-3xl mx-auto mb-8 text-right px-4">
          <p 
            className="text-xs italic"
            style={{ 
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
              fontWeight: 400,
              lineHeight: 1.5
            }}
            data-testid="text-welcome-paragraph"
          >
            Welcome! We are so thrilled to share this special day with you. Your presence means the world to us, and we cannot wait to celebrate our love with the people who matter most. Thank you for joining us as we begin this new chapter together.
          </p>
        </div>

        {/* Footer Banner with Bullets */}
        <div className="mt-8" style={{ borderTop: '2px solid #1c1c1c', borderBottom: '2px solid #1c1c1c', padding: '6px 0' }}>
          <div className="flex justify-center items-center gap-4 text-xs sm:text-sm uppercase" style={{ fontWeight: 700, letterSpacing: '0.1em' }}>
            <span data-testid="text-best-day-1">THE BEST DAY EVER</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline" data-testid="text-best-day-2">THE BEST DAY EVER</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline" data-testid="text-best-day-3">THE BEST DAY EVER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewspaperHero;
