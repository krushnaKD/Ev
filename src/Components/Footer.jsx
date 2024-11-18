import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  const titleref = useRef();

  useEffect(() => {
    gsap.from(titleref.current, {});
  }, []);

  return (
    <div className="w-full h-screen p-10 flex flex-col items-start mt- ">
      <div className="h-[50%] w-[70%] flex flex-col m-auto  text-center">
        <div className="flex text-center w-full justify-center">
          <h1
            ref={titleref}
            className="text-[7rem] font-bold tracking-tight leading-[16vh] "
          >
            Eva is the <span className="">Future</span>
          </h1>
        </div>
<div className="">
<p className=" mt-10 text-lg">
          Eva Electric, appears to focus on showcasing a business or service
          related to electric vehicles or sustainable technology. The design
          conveys a modern feel, but enhancements like improved color harmony,
          responsive layouts, and hover effects can elevate user engagement. Key
          areas such as clear navigation, distinct calls-to-action, and
          optimized imagery would help streamline the user experience.
        </p>
</div>
      </div>

     <div className="w-full flex ">
      <div className="w-[50%]">
      <img className="rounded-lg shadow-lg" src="https://www.thehindubusinessline.com/companies/lnaz37/article33685848.ece/ALTERNATES/LANDSCAPE_615/bl29-matters-evs" alt="" />
      </div>
     <div className="flex w-full mt-20">
        <div className="w-[50%]"></div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2 w-fit text-center items-center mt-1">
            <h1 className="text-xl font-medium ">Social's</h1>
            <h3 className="text-lg mt-3 text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              Instagram
            </h3>
            <h3 className="text-lg text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              Twitter
            </h3>
            <h3 className="text-lg text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              LinkdIn
            </h3>
          </div>
          <div className="flex flex-col gap-2 w-fit text-center items-center mt-1">
            <h1 className="text-xl font-medium ">EV Plant</h1>
            <h3 className="text-lg mt-3 text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              Pune
            </h3>
            <h3 className="text-lg text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              Nashik
            </h3>
            <h3 className="text-lg text-zinc-700 px-2 hover:border-2 border-black rounded-full bg-transparent w-fit">
              Nanded
            </h3>
          </div>
          <div className="flex gap-5 h-10 mt-[30%]  ">
            <h1 className="p-2 bg-black text-white rounded-md text-2xl hover:scale-110">
              <FaGithub />
            </h1>
            <h1 className="p-2 bg-blue-400 text-white rounded-md text-2xl hover:scale-110">
              <FaLinkedin />
            </h1>
            <h1 className="p-2   bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 text-white rounded-md text-2xl hover:scale-110">
              {" "}
              <FaInstagram />
            </h1>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Footer;
