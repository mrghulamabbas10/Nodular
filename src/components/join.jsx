'use client';

import React from 'react';
import { motion } from 'framer-motion';

const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            type: 'spring',
            stiffness: 60,
        },
    },
};

const paragraphVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.3,
            type: 'spring',
            stiffness: 50,
        },
    },
};

const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: 0.6,
            type: 'spring',
            stiffness: 80,
        },
    },
};

export default function Join() {
    return (
        <div className="mt-10 relative">
            <img src="/images/join.png" alt="Join Banner" className="w-full object-cover md:h-full h-[80vh]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true, amount: 0.4 } }
                className="absolute z-10 text-center w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] mx-auto left-1/2 md:bottom-[20vw] bottom-44 -translate-x-1/2 space-y-4"
            >
                {/* Heading */ }
                <motion.h3
                    variants={ headingVariant }
                    className="text-2xl sm:text-3xl md:text-4xl text-white"
                >
                    Nobular: Powering the Future of Decentralized Nodes
                </motion.h3>

                {/* Paragraph */ }
                <motion.p
                    variants={ paragraphVariant }
                    className="text-base sm:text-lg text-white/80"
                >
                    Seamless Node Management Starts Here
                </motion.p>


            </motion.div>
            {/* Button */ }
            <motion.button
                variants={ buttonVariant }
                className="text-white btn !w-[18rem] sm:!w-[20rem] font-light text-lg mx-auto flex items-center justify-center gap-2"
            >
                <span className="uppercase">Join with community</span>
                <svg
                    height="24"
                    width="24"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    className="sparkle"
                >
                    <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
                </svg>
            </motion.button>
        </div>
    );
}
