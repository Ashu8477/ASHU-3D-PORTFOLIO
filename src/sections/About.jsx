import React, { useRef } from "react";
import coding from "../assets/coding-pov.png";
import Card from "../components/Card";
import C from "../assets/logos/csharp.svg";
import dotnet from "../assets/logos/dotnet-pink.png";
import react from "../assets/logos/react.svg";
import word from "../assets/logos/wordpress.svg";
import vitee from "../assets/logos/vitejs.svg";
import Globe from "../components/globe";
import Copy from "../components/copyemailbutton";
import { Framework } from "../components/Framework";
const About = () => {
  const grid2Container = useRef();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={coding}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          ></img>
          <div className="z-10">
            <p className="headtext">Hi, I'm Ashu</p>
            <p className="subtext">
              I’m a passionate developer who loves turning ideas into real-world
              solutions through clean, efficient, and creative code. I enjoy
              working with modern technologies, learning continuously, and
              building projects that solve meaningful problems
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-6xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "33%", left: "17%" }}
              text="Debug Mode On🐞"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "45%" }}
              text="PassionateCoder✨"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", top: "60%", left: "75%" }}
              text="Keep Shipping 🚀"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "30%", left: "1%" }}
              text="Design Principle🎨"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "15%", left: "38%" }}
              text="🌐 REST API"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "87%" }}
              image={C}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "80%", left: "5%" }}
              image={dotnet}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "0deg", top: "19%", left: "5%" }}
              image={react}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "90%", left: "80%" }}
              image={vitee}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "90%", left: "50%" }}
              image={word}
              containerRef={grid2Container}
            />
          </div>
        </div>
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Work Flexibility ⏰</p>
            <p className="subtext">
              I believe adaptability is key to successful collaboration.
              Comfortable working across different schedules and time zones, I
              ensure seamless teamwork. My flexible approach helps in delivering
              projects on time while maintaining clear communication.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Always eager to build, learn, and create — reach out if you’d like
              to start something together
            </p>
            <Copy />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              From crafting pixel-perfect user interfaces to developing efficient server-side logic, I work across the full stack to deliver seamless digital experiences.
            </p>

          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"></div>
          <Framework/>
        </div>
      </div>
    </section>
  );
};

export default About;
