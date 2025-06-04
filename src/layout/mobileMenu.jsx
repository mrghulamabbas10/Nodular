import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiTelegram2Fill } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'

const NAV_LINKS = [
  { name: 'Features', linkPath: '#Features' },
  { name: 'About', linkPath: '#About' },
  { name: 'Tokenomics', linkPath: '#Tokenomics' },
  { name: 'Roadmap', linkPath: '#Roadmap' },
]

// Sidebar reveal animation with circular clip
const sidebarVariants = {
  hidden: {
    clipPath: 'circle(0% at 100% 0%)',
    opacity: 0,
  },
  visible: {
    clipPath: 'circle(150% at 100% 0%)',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 20,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    clipPath: 'circle(0% at 100% 0%)',
    opacity: 0,
    transition: { duration: 0.4 },
  },
}

// Shared animation for list items & buttons
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export default function MobileMenu({ setMenuShow }) {
  const handleClose = () => setMenuShow(false)

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 bg-black z-50 w-full h-screen text-white px-5 pt-10'
        variants={ sidebarVariants }
        initial='hidden'
        animate='visible'
        exit='exit'
        style={ { origin: 'top right' } }
      >
        <span
          className='absolute top-7 right-20 cursor-pointer text-white text-2xl'
          onClick={ handleClose }
        >
          ✕
        </span>

        {/* Nav Items */ }
        <motion.ul className='flex flex-col gap-6 pl-5 mt-16'>
          { NAV_LINKS.map((item, index) => (
            <motion.li
              key={ index }
              variants={ itemVariants }
              className='font-light text-2xl'
            >
              <Link to={ item.linkPath } onClick={ handleClose }>
                { item.name }
              </Link>
            </motion.li>
          )) }
        </motion.ul>

        {/* Socials + Button */ }
        <motion.div
          className='flex items-center gap-5 pl-5 mt-10 mb-5'
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <motion.a
            variants={ itemVariants }
            href=''
            className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'
          >
            <RiTelegram2Fill />
          </motion.a>

          <motion.a
            variants={ itemVariants }
            href='https://x.com/Nobularsolana'
            className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'
          >
            <FaXTwitter />
          </motion.a>

          <motion.a variants={ itemVariants } href='/dashboard'>
            <button className='px-10 py-2 button1 rounded-full text-lg'>
              Dapp
            </button>
          </motion.a>
        </motion.div>

      </motion.div>
    </AnimatePresence>
  )
}
