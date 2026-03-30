import { OrbitingCircles } from "./Orbitingcircle";
import auth0 from "../assets/logos/auth0.svg";
import blazor from "../assets/logos/blazor.svg";
import cplusplus from "../assets/logos/cplusplus.svg";
import csharp from "../assets/logos/csharp.svg";
import css3 from "../assets/logos/css3.svg";
import dotnet from "../assets/logos/dotnet.svg";
import dotnetcore from "../assets/logos/dotnetcore.svg";
import git from "../assets/logos/git.svg";
import html5 from "../assets/logos/html5.svg";
import javascript from "../assets/logos/javascript.svg";
import microsoft from "../assets/logos/microsoft.svg";
import react from "../assets/logos/react.svg";
import sqlite from "../assets/logos/sqlite.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import vitejs from "../assets/logos/vitejs.svg";
import wordpress from "../assets/logos/wordpress.svg";
const logos = {
  auth0,
  blazor,
  cplusplus,
  css3,
  dotnet,
  csharp,
  dotnetcore,
  git,
  html5,
  javascript,
  microsoft,
  react,
  sqlite,
  tailwindcss,
  vitejs,
  wordpress,
};
export  function  Framework() {
    const skills=["auth0",
        "blazor",
        "cplusplus",
        "css3",
        "dotnet",
        "csharp",
        "dotnetcore",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "react",
        "sqlite",
        "tailwindcss",
        "vitejs",
        "wordpress",
    ];
  return (
    <div className="justify-end relative  flex h-[2rem] w-full  items-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill,index)=>(<Icon key={index} src={logos[skill]}/>))}
        
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skills.reverse().map((skill,index)=>(<Icon key={index} src={logos[skill]}/>))}
        
      </OrbitingCircles>
    </div>
  );
}

const Icon=({src})=>(
    <img src={src} className="duration-200 rounded-sm hover:scale-110  "/>
)

