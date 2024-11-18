import React from "react";
import { ImCross } from "react-icons/im";
function Info({ det, setClick, Click }) {
  
  
  const toggle = () => {
    setClick(false);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative w-[70%] h-[75%] flex items-center gap-[10vw] p-10 bg-[#77CDFF] rounded-lg shadow-2xl">
        <button
          onClick={toggle}
          className="absolute top-5 left-[93%] bg-white p-3 rounded-full text-xl hover:scale-90"
        >
          <ImCross />
        </button>

        <div className="w-[40%]">
          <img src={det.image} alt="Electric Bike" />
        </div>

        <div className="w-[50%] h-full flex flex-col justify-between items-center">
          <div className="w-full h-[30%] pt-5 flex flex-col gap-5 border-b-2 border-black text-start">
            <h1 className="text-3xl font-semibold tracking-wide">{det.name}</h1>
            <h2 className="text-xl">${det.price}</h2>
          </div>
          <div className="w-full h-[66%] flex flex-col gap- p-2">
            <p>{det.description}</p>
            <h3>Features:-</h3>
            {det.features.map((f, i) => (
              <div className="flex flex-col g ">
                <ul className="">
                <li className="border-2  rounded-md p-1  hover:scale-100 cursor-pointer ">{f}</li>
              </ul>
              </div>
            ))}
            <h3 className="mt-5">Status: {det.status}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
