import React from 'react';
import insta from '../assets/logos/insta.png';

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-8 pb-3 text-sm text-neutral-400 c-space">
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-4" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p></p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/ashu-kumar-77877b289"
          target="_blank"
          className="font-bold text-2xl"
        >
          LINKEDIN
        </a>
        <p></p>
        <a
          href="https://github.com/Ashu8477"
          target="_blank"
          className="font-bold text-2xl"
        >
          GIT-HUB
        </a>
        <p></p>
        <a
          href="https://www.instagram.com/ashu.xpvtt/"
          target="_blank"
          className="font-bold text-2xl"
        >
          INSTAGRAM
        </a>
      </div>
    </section>
  );
};

export default Footer;
