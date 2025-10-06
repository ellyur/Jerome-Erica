import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    '/images/imageloop_1759760761698.jpg',
    '/images/imageloop1_1759760761700.jpg',
    '/images/cover3_1759760761697.jpg',
    '/images/imageloop_1759760761698.jpg',
    '/images/imageloop1_1759760761700.jpg',
    '/images/cover3_1759760761697.jpg',
    '/images/imageloop_1759760761698.jpg',
    '/images/imageloop1_1759760761700.jpg',
    '/images/cover3_1759760761697.jpg'
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
