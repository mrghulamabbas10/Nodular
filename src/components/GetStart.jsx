"use client";
import React from 'react';
import { motion, } from 'framer-motion';

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

export default function GetStart() {
    return (
        <div className='md:p-10 p-5'>
            <motion.div
                className="getstartbg md:p-0 p-5 md:h-[50vw] h-[120vw] border border-[#FFFFFF14] flex flex-col gap-8 justify-center items-center relative z-10 md:mt-20 mt-10 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={ { once: true } }
                variants={ textVariant }
            >
                <img src="/images/shap-1.png" alt="" className='absolute top-0 left-0' />
                <img src="/images/shap-4.png" alt="" className='absolute bottom-0 right-0' />
                {/* Hover container */ }
                <motion.div
                    className="absolute inset-0 z-[-1]"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                >
                    <motion.img
                        src="/images/feature-2.png"
                        alt=""
                        variants={ {
                            rest: { rotate: 0 },
                            hover: { rotate: 15 },
                        } }
                        transition={ { duration: 0.5 } }
                        className="absolute md:w-auto w-[50vw] md:-top-32 -top-20 md:-right-32 -right-20"
                        style={ { originX: 1, originY: 0 } }
                    />

                    <motion.img
                        src="/images/feature-1.png"
                        alt=""
                        variants={ {
                            rest: { rotate: 0 },
                            hover: { rotate: 15 },
                        } }
                        transition={ { duration: 0.5 } }
                        className="absolute md:w-auto w-[50vw] md:-bottom-32 -bottom-20 -left-20 md:-left-32"
                        style={ { originX: 0, originY: 1 } }
                    />
                </motion.div>

                {/* Heading */ }
                <motion.h2
                    className="font2 text-4xl text-center"
                    variants={ textVariant }
                    custom={ 1 }
                >
                    Build and deploy <br /> AI models
                </motion.h2>

                {/* Paragraph */ }
                <motion.p
                    className="text-center max-w-xl md:text-base text-sm"
                    variants={ textVariant }
                    custom={ 2 }
                >
                    Develop and train AI models and applications using NodeAI’s decentralized <br />
                    GPU network. Tailored for individuals and enterprises.
                </motion.p>

                {/* Button */ }
                <a href="/dashboard">
                    <motion.button
                        variants={ textVariant }
                        custom={ 3 }
                        className="text-white btn font-light text-lg mx-auto md:w-[20rem]"
                    >
                        <span className="text uppercase">Get started now</span>
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
                </a>
            </motion.div>
        </div>
    );
}
