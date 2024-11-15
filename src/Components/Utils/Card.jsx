import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Info from "./Info";
import { ImCross } from "react-icons/im";
function Card({ det }) {
  const { id, name, image, description, status, price, range, feature } = det;
  const [Click, setClick] = useState(false);

  const Togglebtn = (d)=>{
    setClick(!Click)
    
  }

  return (
    <>
      <div className="w-[26vw] h-[30vh] bg-gradient-to-bl  from-orange-400 to-yellow-300 rounded-lg flex justify-evenly items-center shadow-xl hover:scale-110 hover:ease-in-out">
        <div className="flex flex-col gap-10">
          <div>
            <h1>{name}</h1>
            <h3>${price}</h3>
          </div>
          <NavLink
            onClick={()=>{
              Togglebtn(det)           }}
            to="/info"
            className="flex gap-1 items-center hover:scale-110 cursor-pointer"
          >
            <MdArrowOutward />
            Learn More
          </NavLink>
        </div>
        <div className="w-[50%]">
          <img className="w-[100%]  " src={image} alt="" />
        </div>
      </div>
{Click && 
    <Info det={det} click={Click} setClick={setClick}/>
}
    </>
  );
}

export default Card;
