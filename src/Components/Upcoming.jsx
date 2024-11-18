import React, { useEffect } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Upcoming() {

  const controls = useAnimation();

  const [ref, inView] = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);


  return (
    <div className='w-full h-screen  cursor-pointer border-b border-black '>
    
      <motion.div ref={ref} className='w-full' 
       initial={{ opacity: 0, y: 50 }}
       animate={controls}
       style={{
         fontSize: '2rem',
         textAlign: 'center',
       }}>
        <h1 className='text-[6rem] font-bold leading-tight   tracking-tighter text-center'>Driving the Future Electric <br /> Vehicles.</h1>
      </motion.div>
      <div className='w-full flex gap-20 items-center mt-[10%] justify-center text-zinc-200 '>
        <div className='w-[25vw] h-[30vh] relative bg-black opacity-50 shadow-lg rounded-lg flex items-center justify-center'>
        <img className='w-44 ' src="https://www.mooving.com/wp-content/uploads/2022/09/Mooving_66.png" alt="" />
        <h1 className='absolute text-7xl font-bold flex items-center hover:text-blue-500'>Products <MdArrowOutward /></h1>
        </div>
        <div className='w-[25vw] h-[30vh] bg-zinc-400 opacity-50 shadow-lg rounded-lg flex items-center justify-center'>
            <img src="https://static.vecteezy.com/system/resources/previews/023/814/084/original/ev-charging-station-with-car-in-free-png.png" alt="" />
            <h1 className='absolute text-7xl  font-bold flex items-center  text-center'>Comming <br /> Soon</h1>
        </div>
        <div className='w-[25vw] h-[30vh] bg-black opacity-50 shadow-lg rounded-lg'>
         <h1 className='text-7xl text-center mt-3 font-bold'>Comming <br />Soon</h1>
        </div>
      </div>
    </div>
  )
}

export default Upcoming
