"use client";

import { motion, useScroll, useTransform, } from "framer-motion";
import ShinyText from "./animations/ShinyText";
import { useRef } from "react";



const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3,
            duration: 0.6,
        },
    }),
};

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

const images = [
    {
        img: "/images/shap-1.png",
        class: "absolute top-0 left-0"
    },
    {
        img: "/images/shap-2.png",
        class: "absolute !mt-0 top-0 right-0"
    },
    {
        img: "/images/shap-3.png",
        class: "absolute bottom-0 left-0"
    },
    {
        img: "/images/shap-4.png",
        class: "absolute bottom-0 right-0"
    },
]


export default function NodularSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"], // trigger when section enters and exits viewport
    });

    // Translate glop image Y position with scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // start at top, end near bottom

    return (
        <section className="relative p-5 z-10" ref={ sectionRef }>
            {/* Animated Glop Image */ }
            <motion.img
                src="/images/glop.png"
                alt="Glop"
                className="absolute left-[25%] top-0 -translate-x-[-25%] -z-10 md:block hidden"
                style={ { y } }
            />
            {/* Glowing Circle */ }
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full right-[10vw] bg-gradient-to-tr  from-[#FF6F6F] via-[#FF983C] to-[#D60AFF] blur-3xl opacity-30 z-0" />
            <div className="flex items-center md:text-start text-center md:justify-between md:flex-row flex-col gap-3 justify-center my-16 ">
                <div>
                    <p className="text-sm text-orange-500 uppercase mb-2 tracking-wide">
                        { `[How it works]` }
                    </p>
                    <h2 className="text-2xl md:text-4xl mb-6 gradient-text font2">
                        Step Inside Nodular: Revolutionizing <br /> GPU Node Management
                    </h2>
                </div>
                <div>
                    <motion.button
                        variants={ textVariant }
                        custom={ 3 }
                        className="text-white btn font-light text-lg"
                    >
                        <span className="text uppercase"> Get started</span>
                        <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
                            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                        </svg>
                    </motion.button>
                </div>
            </div>

            <div className="relative flex justify-center items-center mt-[20vw]">
                <div className="grid grid-cols-12 md:gap-0 gap-3">
                    <motion.div
                        className="md:col-span-3 col-span-full box flex flex-col justify-center bg-[#FFFFFF0A] border border-[#FFFFFF14] p-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                    >
                        { images.map((item, idx) => (
                            <img src={ item.img } alt="" className={ item.class } key={ idx } />
                        )) }
                        <motion.div variants={ textVariant } custom={ 2 }>
                            <ShinyText
                                text="Tasks are executed in parallel across multiple nodes, significantly speeding up computation times and optimizing resource usage for maximum performance."
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                    {/* box 2  */ }
                    <motion.div
                        className="md:col-span-3 col-span-full  md:translate-y-[-13.5vw] box flex flex-col justify-center bg-[#FFFFFF0A] border border-[#FFFFFF14] p-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                    >
                        { images.map((item, idx) => (
                            <img src={ item.img } alt="" className={ item.class } key={ idx } />
                        )) }
                        <motion.div variants={ textVariant } custom={ 2 }>
                            <ShinyText
                                text="Clients submit their computational tasks to Node AI, where each task is immediately distributed across a secure, high-performance network of AI nodes designed to handle demanding workloads efficiently."
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                    {/* box 3  */ }
                    <motion.div
                        className="md:col-span-6 col-span-full  box flex flex-col justify-center bg-[#FFFFFF0A] border border-[#FFFFFF14] p-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                    >
                        { images.map((item, idx) => (
                            <img src={ item.img } alt="" className={ item.class } key={ idx } />
                        )) }
                        <motion.div variants={ textVariant } custom={ 2 }>
                            <ShinyText
                                text="By leveraging the power of the L1 Blockchain, all computations are secured with immutable, verifiable records, ensuring that every processing step is transparent and tamper-proof."
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                    {/* box 4  */ }
                    <motion.div
                        className="md:col-span-6 col-span-full md:mt-3 box flex flex-col justify-center bg-[#FFFFFF0A] border border-[#FFFFFF14] p-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                    >
                        { images.map((item, idx) => (
                            <img src={ item.img } alt="" className={ item.class } key={ idx } />
                        )) }
                        <motion.div variants={ textVariant } custom={ 2 }>
                            <ShinyText
                                text="Once computations are complete, the results undergo verification to confirm accuracy and integrity. This process guarantees trustworthy outputs before they are delivered back to clients."
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                    {/* box 5 */ }
                    <motion.div
                        className="md:col-span-3 col-span-full md:mt-3 md:ml-2 box flex flex-col justify-center bg-[#FFFFFF0A] border border-[#FFFFFF14] p-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={ { once: true } }
                    >
                        { images.map((item, idx) => (
                            <img src={ item.img } alt="" className={ item.class } key={ idx } />
                        )) }
                        <motion.div variants={ textVariant } custom={ 2 }>
                            <ShinyText
                                text="All verified results are encrypted to maintain client confidentiality and are promptly returned, ensuring data privacy without compromising on speed or reliability."
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
