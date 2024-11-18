import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollText = () => {
  // Controls for the animation
  const controls = useAnimation();

  // Track the visibility of the component
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Start animation when the text comes into view
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <div style={{ height: '200vh', padding: '50px' }}>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        This text appears slowly as you scroll!
      </motion.p>
    </div>
  );
};

export default ScrollText;
