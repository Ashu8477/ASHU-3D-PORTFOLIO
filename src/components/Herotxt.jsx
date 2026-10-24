import React from 'react';
import { FlipWords } from './Flipwords';
import { motion } from 'motion/react';

const Herotxt = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* DESKTOP */}
      <div className=" flex-col hidden md:flex c-space">
        <motion.h1
          className=" text-5xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          {' '}
          Hi, I'm Ashu
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>

          <motion.div
            className=" font-bold text-white text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
          >
            <FlipWords words={['Secure', 'Modern', 'Scalable']} />
          </motion.div>
          <motion.p
            className=" text-4xl font-medium text-neutral-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>
      {/* MOBILE */}
      <div className="flex-flex-col space-y-6 md:hidden">
        <motion.p
          className=" text-4xl font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          Hi, I'm Ashu
        </motion.p>
        <div>
          <motion.p
            className=" text-5xl font-black text-neutral-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            className=" font-bold text-white text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <FlipWords words={['Secure', 'Modern', 'Scalable']} />
          </motion.div>
          <motion.p
            className=" text-5xl font-black text-neutral-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            {' '}
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Herotxt;
