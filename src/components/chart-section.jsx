'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShinyText from './animations/ShinyText';

const imageVariant = {
    hidden: { opacity: 0, scale: 1.1, filter: 'blur(8px)' },
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

const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export default function ChartSection() {
    const cards = [
        {
            img: '/images/chart-gif1.gif',
            colSpan: 'md:col-span-5',
            heading: "Rapid Node Deployment",
            para: "Launch AI nodes in just minutes with zero hassle."
        },
        {
            img: '/images/chart-dash.png',
            colSpan: 'md:col-span-7',
            heading: "Seamless User Interface",
            para: "Navigate a clean, intuitive platform built for speed and simplicity."
        },
        {
            img: '/images/chart-dash2.png',
            colSpan: 'md:col-span-7',
            heading: "Global Node Network",
            para: "Access a decentralized grid of high-performance AI nodes anytime, anywhere."
        },
        {
            img: '/images/chart-gif2.gif',
            colSpan: 'md:col-span-5',
            heading: "Scalable & Rewarding",
            para: "Unlock endless opportunities with scalable infrastructure and optimized performance."
        },
    ];

    return (
        <div className="p-5 sm:p-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-5">
                { cards.map((card, idx) => (
                    <motion.div
                        key={ idx }
                        className={ `md:relative md:top-0 sticky top-20 overflow-hidden ${card.colSpan} col-span-full border-2 border-[#2F2F2F] rounded-md` }
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                        variants={ imageVariant }
                    >
                        <motion.img
                            src={ card.img }
                            alt={ `chart-${idx}` }
                            className="w-full h-[80vw] sm:h-[40vw] lg:h-[30vw] object-cover object-top"
                            variants={ imageVariant }
                        />
                        <motion.div
                            className="p-6 sm:p-10 absolute z-20 bottom-0 space-y-3 bg-gradient-to-t from-black/80 to-transparent w-full"
                            variants={ textVariant }
                        >
                            <h2 className="text-xl sm:text-2xl ">{ card.heading }</h2>
                            <ShinyText
                                text={ card.para }
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                )) }
            </div>
        </div>
    );
}
