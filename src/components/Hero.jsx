'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Text from './animations/text';
import BlurText from './animations/BlurText';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: 'spring',
      stiffness: 50,
      damping: 15,
    },
  }),
};

const imageZoomVariant = {
  hidden: { opacity: 0, scale: 1.2, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export default function Hero() {
  return (
    <div className="header h-full md:pt-[20vw] pt-[30vw] pb-[5vw] px-6">
      <div className="flex flex-col md:gap-8 gap-4 justify-center items-center text-center max-w-5xl mx-auto">
        {/* Heading */ }
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
          variants={ fadeUpVariant }
          custom={ 1 }
        >
          <Text>Nodes Made Simple.</Text>
        </motion.div>

        {/* BlurText Subheading */ }
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
          variants={ fadeUpVariant }
          custom={ 2 }
        >
          <BlurText
            text="Decentralization Engineered for Speed and Control!"
            delay={ 150 }
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl lg:text-6xl mb-2 w-full sm:w-[80%] mx-auto justify-center opacity-80 font2"
          />
        </motion.div>

        {/* Button */ }
        <motion.button
          variants={ fadeUpVariant }
          custom={ 3 }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true } }
          className="button2 font2 px-10 py-3 rounded-lg text-black text-xl"
        >
          Get Started
        </motion.button>

        {/* Image */ }
        <div>
          <motion.img
            src="/images/dashboord.png"
            alt="Dashboard"
            className="w-[90%] sm:w-[75%] lg:w-[65%] md:mt-20 mt-5 mx-auto rounded-xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true } }
            variants={ imageZoomVariant }
          />
        </div>
      </div>
    </div>
  );
}
