import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-evenly items-center ">
      <div className="w-[20%]">
        <h1 className="text-7xl font-bold tracking-tight">Eva</h1>
      </div>
      <div className="w-[50%] flex gap-20">
        <NavLink className=' uppercase text-xl font-medium tracking-wide'
         style={(e)=>{
          return {
            color: e.isActive ? "#AF1740":"",
            fontWeight:e.isActive ? "semibold":"",
          }
          
         }}
        to="/">Home</NavLink>
        <NavLink className='uppercase text-xl font-medium tracking-wide'
          style={(e)=>{
            return {
              color: e.isActive ? "#AF1740":"",
              fontWeight:e.isActive ? "semibold":"",
            }
            
           }}
        to="/products">Products</NavLink>
        <NavLink  className='uppercase text-xl font-medium tracking-wide'
         style={(e)=>{
          return {
            color: e.isActive ? "#AF1740":"",
            fontWeight:e.isActive ? "semibold":"",
          }
          
         }}
        to="/About">About</NavLink>

      <NavLink className='uppercase text-xl font-medium tracking-wide'>Contact
        </NavLink> 

      </div>
      <button className="w-[%] bg-blue-400 px-7 py-1 rounded-lg text-lg font-medium ">Login</button>
    </div>
  );
}

export default Navbar;
