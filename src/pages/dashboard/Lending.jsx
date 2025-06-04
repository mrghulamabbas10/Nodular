import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiBell, BiSearch, BiMenuAltLeft, BiX } from 'react-icons/bi';
import Dashboard from '../../components/icons/dashboard';
import Leaderboard from '../../components/icons/Leaderboard';
import Deployment from '../../components/icons/Deployment';
import Staking from '../../components/icons/Staking';
import Leading from '../../components/icons/Leading';
import Profile from '../../components/icons/Profile';
import Logout from '../../components/icons/Logout';
import Total from '../../components/icons/Total';
import Payment from '../../components/icons/payment';
import Note from '../../components/icons/note';

const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: <Dashboard /> },
    { href: "/dashboard/leaderboard", label: "Leaderboard", icon: <Leaderboard /> },
    { href: "/dashboard/deployments", label: "Deployments", icon: <Deployment /> },
    { href: "/dashboard/staking", label: "Staking", icon: <Staking /> },
    { href: "/dashboard/lending", label: "Lending", icon: <Leading /> },
    { href: "/dashboard/profile", label: "Profile", icon: <Profile /> },
];

export default function LeadingMain() {
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
                                            className={ `flex items-center gap-3 p-3 rounded-lg transition-colors ${link.href === "/dashboard/lending"
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
                                className={ `flex items-center gap-3 p-3 rounded-lg transition-colors ${link.href === "/dashboard/lending"
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

                        <div>
                            <a href='#'>
                                <button className='px-10 py-2 button2 rounded-full text-lg'>
                                    Connect Wallet
                                </button>
                            </a>
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
                        <div className=''>
                            <h1 className="text-white text-2xl mb-3 mt-10">Lending</h1>

                            <p>Embark on your journey of decentralization and take charge by setting up your own node. Here, we guide you through the process of launching and managing your nodes efficiently. Whether you're a seasoned pro or just starting out, our platform makes node management seamless. Let's power up the network - together!</p>
                        </div>


                        {/* Filter Controls */ }
                        <motion.div
                            initial={ { y: 30, opacity: 0 } }
                            animate={ { y: 0, opacity: 1 } }
                            transition={ { duration: 0.5, delay: 0.8 } }
                            className=" "
                        >
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-[#FFFFFF1A] py-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-[#B0B0B01A] rounded-lg flex items-center justify-center">
                                        <Note />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Approved Nodes</p>
                                        <span className="text-white font-bold text-xl">12</span>

                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-[#B0B0B01A] rounded-lg flex items-center justify-center">
                                        <Payment />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Payout</p>
                                        <span className="text-white font-bold text-xl">0.0000000</span>

                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 bg-[#B0B0B01A] rounded-lg flex items-center justify-center">
                                        <Total />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Nodes</p>
                                        <span className="text-white font-bold text-xl">1</span>

                                    </div>
                                </div>

                            </div>

                            <div className='my-5 flex items-center gap-5'>
                                <div>
                                    <span className="text-white font-bold text-xl">0.0000000 SOL</span>
                                    <p className="text-gray-400 text-sm">Past Dispute</p>
                                </div>
                                <div>
                                    <span className="text-white font-bold text-xl">0.0000000 SOL</span>
                                    <p className="text-gray-400 text-sm">Active Estimated Payout</p>
                                </div>
                            </div>
                            <div className="flex gap-4 my-8">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full">
                                    My Nodes
                                </button>
                                <button className="bg-black/20 text-gray-400 px-6 py-2 rounded-full border border-[#B0B0B01A]">
                                    Rentals
                                </button>
                            </div>
                        </motion.div>

                        <div>
                            <motion.div
                                initial={ { y: 50, opacity: 0 } }
                                animate={ { y: 0, opacity: 1 } }
                                transition={ { duration: 0.5, delay: 1 } }
                                whileHover={ { scale: 1.02, y: -5 } }
                                className="cursor-pointer"
                            >
                                <img src={ "/images/table.png" } alt="" className='w-full' />

                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}