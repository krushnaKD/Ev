import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Hero() {
  const imageref = useRef();

  // useGSAP(() => {
  //   if (imageref.current) {
  //     gsap.from(imageref.current, {
  //       scale: 0.1,
  //       duration: 1,
  //     });
  //   }
  // }, []);

  window.onload = () => {
    gsap.from(imageref.current, {
      x: "40vw", // Start from 100% of the viewport width (offscreen to the right)
      duration: 4, // Animation duration in seconds
      ease: "bounce.out", // Smooth easing effect
      opacity: 0.1, // Start with opacity 0 for a fade-in effect
      
    });
  };


  return (
    <div className="w-full h-screen flex items-center justify-between ">
      <div className="h-full w-[40%] flex flex-col items-start gap-10 ml-10 p-20">
        <h1 className="tracking-widest mt-10 text-4xl font-semibold leading-[10vh]">
          LET'S RIDE THE <br />
          <span className="text-[7rem] font-bold ">FUTURE</span>
        </h1>

        <div className="uppercase">
          <h2 className="font-medium">
            Simple and sleek design <br />
            with users in mind
          </h2>
          <button className="bg-[#3AA6B9] px-2 py-1 rounded-lg mt-2 uppercase p-2 font-medium">
            pre order
          </button>
        </div>
      </div>

      <div className="h-screen w-[60%] flex flex-col relative">
        <img
          ref={imageref}
          className=" w-[27vw] transform scale-x-[-1] absolute left-[29%] top-10 z-20"
          src="https://pngimg.com/uploads/scooter/scooter_PNG11280.png"
          alt=""
        />
        <div className="w-[50%] p-10  rounded-lg absolute top-[68%] left-[44%] flex justify-between items-center bg-zinc/20 backdrop-blur-md shadow-lg border border-white/30">
             <div className="">
                <h1 className="text-lg font-medium">70km/hr</h1>
                <h2 className="">speed</h2>
             </div>
             <div>
                <h1 className="text-lg font-medium">100Km</h1>
                <h2 className="">Range</h2>
             </div>
             <div>
                <h1 className="text-lg font-medium">3.5hr</h1>
                <h2 className="">Charging time</h2>
             </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
