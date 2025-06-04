import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiBell, BiChevronDown, BiSearch, BiMenuAltLeft, BiX } from 'react-icons/bi';
import Main from './Main';
import GPU from '../icons/GPU';
import Memory from '../icons/Memory';
import Slote from '../icons/Slote';
import Card from '../icons/Card';
import Dashboard from '../icons/dashboard';
import Leaderboard from '../icons/Leaderboard';
import Deployment from '../icons/Deployment';
import Staking from '../icons/Staking';
import Leading from '../icons/Leading';
import Profile from '../icons/Profile';
import Logout from '../icons/Logout';

const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: <Dashboard /> },
    { href: "/dashboard/leaderboard", label: "Leaderboard", icon: <Leaderboard /> },
    { href: "/dashboard/deployments", label: "Deployments", icon: <Deployment /> },
    { href: "/dashboard/staking", label: "Staking", icon: <Staking /> },
    { href: "/dashboard/lending", label: "Lending", icon: <Leading /> },
    { href: "/dashboard/profile", label: "Profile", icon: <Profile /> },
];

export default function Sidebar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        console.log("Nav Links:", navLinks);
    }, []);

    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            {/* Sidebar (hidden on mobile, toggleable) */ }
            <AnimatePresence>
                { isSidebarOpen && (
                    <>
                        {/* Backdrop */ }
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40 md:hidden"
                            onClick={ () => setSidebarOpen(false) }
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                        />
                        {/* Sidebar */ }
                        <motion.div
                            initial={ { x: -300 } }
                            animate={ { x: 0 } }
                            exit={ { x: -300 } }
                            transition={ { duration: 0.3 } }
                            className="fixed top-0 left-0 w-64 h-full bg-black/20 backdrop-blur-sm border-r border-[#B0B0B01A] p-6 z-50 flex flex-col justify-between"
                        >
                            <div className='space-y-4'>
                                <div className="flex items-center justify-between mb-10">
                                    <img src="/images/dash-logo.png" alt="Logo" className='w-28' />
                                    <button onClick={ () => setSidebarOpen(false) } className="text-white text-xl">
                                        <BiX />
                                    </button>
                                </div>
                                <nav className="space-y-2">
                                    { navLinks.map((link, index) => (
                                        <a
                                            key={ index }
                                            href={ link.href }
                                            className={ `flex items-center gap-3 p-3 rounded-lg transition-colors ${link.href === "/dashboard"
                                                ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
                                                : "text-gray-400 hover:text-white hover:bg-[#B0B0B01A]"
                                                }` }
                                        >
                                            { link.icon }
                                            { link.label }
                                        </a>
                                    )) }
                                </nav>
                            </div>
                            <div className="pt-8">
                                <button className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg hover:bg-[#B0B0B01A] w-full">
                                    <Logout />
                                    Log Out
                                </button>
                            </div>
                        </motion.div>
                    </>
                ) }
            </AnimatePresence>

            {/* Sidebar for Desktop */ }
            <motion.div
                initial={ { x: -100, opacity: 0 } }
                animate={ { x: 0, opacity: 1 } }
                transition={ { duration: 0.5 } }
                className="hidden md:flex w-64 min-h-screen flex-col justify-between bg-black/20 backdrop-blur-sm border-r border-[#B0B0B01A] py-10 px-6"
            >
                <div className='space-y-4'>
                    <a href='/' className="flex items-center gap-3 mb-10">
                        <img src="/images/dash-logo.png" alt="Logo" className='w-32' />
                    </a>
                    <nav className="space-y-2">
                        { navLinks.map((link, index) => (
                            <a
                                key={ index }
                                href={ link.href }
                                className={ `flex items-center gap-3 p-3 rounded-lg transition-colors ${link.href === "/dashboard"
                                    ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
                                    : "text-gray-400 hover:text-white hover:bg-[#B0B0B01A]"
                                    }` }
                            >
                                { link.icon }
                                { link.label }
                            </a>
                        )) }
                    </nav>
                </div>
                <div className="pt-8">
                    <button className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg hover:bg-[#B0B0B01A] w-full">
                        <Logout />
                        Log Out
                    </button>
                </div>
            </motion.div>

            {/* Main Content */ }
            <div className="flex-1 w-full">
                {/* Header */ }
                <motion.header
                    initial={ { y: -50, opacity: 0 } }
                    animate={ { y: 0, opacity: 1 } }
                    transition={ { duration: 0.5, delay: 0.2 } }
                    className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-[#B0B0B01A]"
                >
                    <div className="flex items-center gap-4">
                        {/* Toggle Button (only on mobile) */ }
                        <button onClick={ () => setSidebarOpen(true) } className="md:hidden text-white text-2xl">
                            <BiMenuAltLeft />
                        </button>
                        <h2 className="text-white text-xl sm:text-2xl">Hi, Good Morning</h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <div className="relative w-full sm:w-auto">
                            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full sm:w-auto bg-black/20 border border-[#B0B0B01A] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div className="relative">
                            <BiBell className="w-6 h-6 text-white" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 text-[9px] font-bold flex items-center justify-center bg-red-500 rounded-full">1</div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-white text-sm">Evano</span>
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                    </div>
                </motion.header>

                {/* Page Content */ }
                <div className="p-4">
                    <motion.div
                        initial={ { y: 50, opacity: 0 } }
                        animate={ { y: 0, opacity: 1 } }
                        transition={ { duration: 0.5, delay: 0.4 } }
                    >
                        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
                            <h1 className="text-white text-xl sm:text-2xl">Select A Node</h1>
                            <div className="flex gap-2 flex-wrap">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm">
                                    New
                                </button>
                                <button className="bg-black/20 text-gray-400 px-4 py-2 rounded-full border border-[#B0B0B01A] text-sm">
                                    Running
                                </button>
                            </div>
                        </div>

                        {/* Filters */ }
                        <motion.div
                            initial={ { y: 30, opacity: 0 } }
                            animate={ { y: 0, opacity: 1 } }
                            transition={ { duration: 0.5, delay: 0.8 } }
                            className="bg-black/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 border border-[#B0B0B01A]"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                { [
                                    { icon: <GPU />, label: "GPU Model" },
                                    { icon: <Memory />, label: "GPU Memory" },
                                    { icon: <Slote />, label: "GPU Slots" },
                                    { icon: <Card />, label: "CPU Memory" },
                                ].map((item, idx) => (
                                    <div key={ idx } className="flex items-center gap-3">
                                        <div className="w-16 h-16 bg-[#B0B0B01A] rounded-lg flex items-center justify-center">
                                            { item.icon }
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">{ item.label }</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-white">All</span>
                                                <BiChevronDown className="w-4 h-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </motion.div>

                        <Main />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
