import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileMenu from './mobileMenu'
import { RiTelegram2Fill } from 'react-icons/ri'
import { FaXTwitter } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'

const NAV_LINKS = [
  { name: 'Features', linkPath: '#Features' },
  { name: 'About', linkPath: '#About' },
  { name: 'Tokenomics', linkPath: '#Tokenomics' },
  { name: 'Roadmap', linkPath: '#Roadmap' },
]

export default function Navbar() {
  const [menuShow, setMenuShow] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const HandleClick = () => setMenuShow(true)

  return (
    <motion.div
      initial={ { y: -50, opacity: 0 } }
      animate={ { y: 0, opacity: 1 } }
      transition={ { duration: 0.6, ease: 'easeOut' } }
      className={ `fixed w-full z-50 transition-all duration-300  ${scrolled ? 'bg-black shadow-md' : 'md:bg-transparent bg-black'
        }` }
    >
      <nav className='md:px-10 px-5 py-6 flex items-center justify-between'>
        <div>
          <Link to='/'>
            <img
              src='/images/logo.png'
              alt='logo'
              className='md:w-[15vw] w-[35vw]'
            />
          </Link>
        </div>

        <div className='md:block hidden bg-black py-3 border-[#282828] rounded-full px-10'>
          <ul className='flex items-center gap-14'>
            { NAV_LINKS.map((item, index) => (
              <li key={ index } className='font-semibold'>
                <Link to={ item.linkPath }>{ item.name }</Link>
              </li>
            )) }
          </ul>
        </div>

        <div className='md:flex items-center gap-5 hidden'>
          <a
            href=''
            className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'
          >
            <RiTelegram2Fill />
          </a>
          <a
            href='https://x.com/Nobularsolana'
            className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'
          >
            <FaXTwitter />
          </a>

          <a href='/dashboard'>
            <button className='px-10 py-2 button1 rounded-full text-lg'>
              Dapp
            </button>
          </a>

        </div>

        <div className='md:hidden block relative'>
          <button onClick={ HandleClick }>
            <GiHamburgerMenu className='text-2xl' />
          </button>
        </div>
      </nav>

      { menuShow && <MobileMenu setMenuShow={ setMenuShow } /> }
    </motion.div>
  )
}
