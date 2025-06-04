import { motion } from "framer-motion";
import { BsTelegram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="p-5">
      <motion.footer
        initial={ { opacity: 0, y: 40 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { duration: 0.6, ease: "easeOut" } }
        className="relative px-6 py-10 md:px-16 border border-[#FFFFFF14] border-b-0"
      >
        <img src="/images/plus.png" alt="" className='absolute rotate-infinite -top-2 -left-2' />
        <img src="/images/plus.png" alt="" className='absolute rotate-infinite -top-2 -right-2' />
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 ">
          {/* Left Section */ }
          <div className="space-y-5 max-w-xs">
            <div  >
              <img src="/images/logo.png" alt="Nodular Logo" className="md:w-[15vw] w-[40vw]" />
            </div>
            <p className="msd:text-base text-sm text-gray-400">
              Nodular: Powering the Future of Decentralized Nodes
            </p>
          </div>

          {/* Center Navigation */ }
          <div className="flex flex-col gap-8">
            <h4 className="font-semibold text-sm uppercase text-gray-300">Main Pages</h4>
            <nav className="flex gap-4 text-sm text-gray-400 flex-wrap">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">About</a>
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">How We Work</a>
            </nav>
            <div className="text-center mt-6 text-xs md:block hidden">
              © Copyright 2025 - <span className="text-purple-400">Nodular</span>. All Rights Reserved.
            </div>
          </div>

          {/* Socials */ }
          <div className="flex flex-col gap-5">
            <h4 className="font-semibold text-sm uppercase text-gray-300">Socials</h4>
            <div className='flex items-center gap-5'>
              <a href="" className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'>
                <RiTelegram2Fill />
              </a>
              <a href="" className='p-3 rounded-full bg-black hover:bg-[#FF6F6F] transition-all duration-150 border border-[#282828]'>
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className=" mx-auto mt-6 text-xs md:hidden block text-center">
            © Copyright 2025 - <span className="text-purple-400">Nodular</span>. All Rights Reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
