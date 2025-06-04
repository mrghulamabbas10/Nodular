'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from './animations/ShinyText';

const textVariant = {
    hidden: { opacity: 0, y: 50 },
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

const imageVariant = {
    hidden: { scale: 1.2, opacity: 0, filter: 'blur(10px)' },
    visible: {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
};

export default function Section2() {
    return (
        <div className="p-0 sm:p-10 mt-[5vw] max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 about items-center md:p-20 p-10">
                {/* Left Text Block */ }
                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                >
                    <motion.h1
                        variants={ textVariant }
                        custom={ 1 }
                        className="gradient-text text-3xl sm:text-4xl lg:text-5xl "
                    >
                        Instant Project Launch <br /> with 1-Click Templates
                    </motion.h1>

                    <motion.div variants={ textVariant } custom={ 2 }>
                        <ShinyText
                            text="Deploy with ease using pre-configured templates for TensorFlow, PyTorch, MXNet, and more — no setup or configuration needed."
                            disabled={ false }
                            speed={ 3 }
                            className="custom-class"
                        />
                    </motion.div>

                    <a href="/dashboard">
                        <motion.button
                            variants={ textVariant }
                            custom={ 3 }
                            className="button2 font2 px-6 py-3 rounded-xl text-black text-lg font-semibold"
                        >
                            Get Started
                        </motion.button>
                    </a>
                </motion.div>

                {/* Right Image */ }
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                    variants={ imageVariant }
                >
                    <img src="/images/dash-1.png" alt="Dashboard 1" className="w-full rounded-xl shadow-xl" />
                </motion.div>

                {/* Second Image */ }
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                    variants={ imageVariant }
                    className='md:block hidden'
                >
                    <img src="/images/dash-2.png" alt="Dashboard 2" className="w-full rounded-xl shadow-xl " />
                </motion.div>

                {/* Right Text Block */ }
                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                >
                    <motion.h1
                        variants={ textVariant }
                        custom={ 1 }
                        className="gradient-text text-3xl sm:text-4xl lg:text-5xl "
                    >
                        1-Click GPU Node <br /> Deployment
                    </motion.h1>

                    <motion.div variants={ textVariant } custom={ 2 }>
                        <ShinyText
                            text="Skip the server setup — launch powerful GPU nodes instantly and focus on what matters most."
                            disabled={ false }
                            speed={ 3 }
                            className="custom-class"
                        />
                    </motion.div>

                    <a href="/dashboard">
                        <motion.button
                            variants={ textVariant }
                            custom={ 3 }
                            className="button2 font2 px-6 py-3 rounded-xl text-black text-lg font-semibold"
                        >
                            Get Started
                        </motion.button>
                    </a>
                </motion.div>
                {/* Second Image */ }
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={ { once: true } }
                    variants={ imageVariant }
                    className='md:hidden block'
                >
                    <img src="/images/dash-2.png" alt="Dashboard 2" className="w-full rounded-xl shadow-xl " />
                </motion.div>
            </div>
        </div>
    );
}
