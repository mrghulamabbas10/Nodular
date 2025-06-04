'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import ShinyText from './animations/ShinyText';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import Right from './icons/right';
import Left from './icons/left';

const items = [
    {
        id: '01',
        title: 'AFFORDABLE COMPUTE',
        img: '/images/feature-1.png',
        desc:
            'Spend less time and money on infrastructure and more time on your business. Get more value from your GPU investment.',
    },
    {
        id: '02',
        title: 'DEPLOY NODES IN MINUTES',
        img: '/images/feature-2.png',
        desc:
            'Our platform is where complexity meets simplicity, providing a seamless interface for clients to tap into a global network of AI nodes.',
    },
    {
        id: '03',
        title: 'PAY-AS-YOU-GO PRICING',
        img: '/images/feature-3.png',
        desc:
            'Get real-time pricing and availability for your workloads. Pay only for what you use. No hidden fees.',
    },
];

const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 60,
            damping: 12,
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


export default function Slider() {
    return (
        <div className="p-5 max-w-7xl mx-auto mt-[10vw]">
            <h3 className='text-[#EE7C2C] text-center'>[ Core features ]</h3>
            <motion.h1
                variants={ textVariant }
                custom={ 1 }
                className="gradient-text text-3xl sm:text-4xl lg:text-5xl text-center mt-2"
            >
                Powerful Features Driving <br /> Intelligent Computation
            </motion.h1>
            <Swiper
                slidesPerView={ 1 }
                spaceBetween={ 20 }
                pagination={ { clickable: true } }
                breakpoints={ {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                } }
                navigation={ {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                } }
                modules={ [Pagination, Navigation] }
                className="mySwiper mt-14"
            >
                { items.map((item, index) => (
                    <SwiperSlide key={ index }>
                        <motion.div
                            className="relative box border border-[#FFFFFF14] p-6 rounded-lg backdrop-blur-sm bg-white/5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={ { once: true } }
                            variants={ boxVariants }
                            custom={ index }
                        >
                            {/* Decorative corners (optional) */ }
                            <img src="/images/shap-1.png" alt="" className="absolute top-0 left-0 w-5" />
                            <img src="/images/shap-2.png" alt="" className="absolute top-0 right-0 w-5" />
                            <img src="/images/shap-3.png" alt="" className="absolute bottom-0 left-0 w-5" />
                            <img src="/images/shap-4.png" alt="" className="absolute bottom-0 right-0 w-5" />

                            <h3 className="gradient-text text-lg mb-3">[ { item.id } ]</h3>

                            <motion.div
                                whileHover={ {
                                    scale: 1.1,
                                    y: -10,
                                    rotate: 15,
                                    transition: { duration: 0.5, type: 'spring' },
                                } }
                                className="w-full flex justify-center mb-5"
                            >
                                <motion.img
                                    src={ item.img }
                                    alt=""
                                    className="w-[60%] object-contain"
                                    initial={ { rotate: 0 } }
                                    animate={ { rotate: 0 } }
                                />
                            </motion.div>

                            <h1 className="gradient-text text-xl font-semibold mb-2">{ item.title }</h1>

                            <ShinyText
                                text={ item.desc }
                                disabled={ false }
                                speed={ 3 }
                                className="custom-class"
                            />
                        </motion.div>
                    </SwiperSlide>
                )) }
            </Swiper>
            <div className="flex justify-center mt-5 gap-5 relative z-10">
                <button className="swiper-button-pre cursor-pointer">
                    <Left />
                </button>
                <button className="swiper-button-next cursor-pointer">
                    <Right />
                </button>
            </div>

        </div>
    );
}
