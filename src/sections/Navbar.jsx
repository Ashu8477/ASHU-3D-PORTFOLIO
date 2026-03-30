import { useState } from 'react';
import menuIcon from '../assets/menu.svg';
import { motion } from 'motion/react';

import menuCloseIcon from '../assets/close.svg';
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#about">
          ABOUT
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience">
          EXPERIENCE
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#certificate">
          CERTIFICATES
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#"
            className="text-xl font-bold transition-colors text-neutral-500 hover:text-white"
          >
            Ashu
          </a>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="flex cursor-pointer text-neutral-500 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? menuCloseIcon : menuIcon}
              className="w-6 h-6"
              alt="menu"
            />
          </button>
          <nav className="hidden sm:flex">
            {' '}
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
