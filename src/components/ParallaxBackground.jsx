import React from 'react'
import mountain3 from "../assets/mountain-3.png";
import mountain2 from "../assets/mountain-2.png";
import mountain1 from "../assets/mountain-1.png";
import sky from "../assets/sky.jpg";
import planets from "../assets/planets.png";
import { motion , useScroll,useSpring,useTransform} from "motion/react";




const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x= useSpring(scrollYProgress,{damping:50})
    const mountain3Y = useTransform(x,[0,0.5],["0%","70%"]);
    const planetsX = useTransform(x,[0,0.5],["0%","-20%"]);
    const mountain1Y = useTransform(x,[0,0.5],["0%","0%"]);
    const mountain2Y = useTransform(x,[0,0.5],["0%","30%"]);
    
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${sky})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover"
            }}/>
            <motion.div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${mountain3})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain3Y
            }}/>
            <motion.div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${planets})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                x:planetsX
            }}/>
            <motion.div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${mountain1}})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain1Y
            }}/>
            <motion.div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage: `url(${mountain2})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:mountain2Y
            }}/> 
                

        </div>

    </section>
  )
}

export default ParallaxBackground
