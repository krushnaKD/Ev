import React from "react";

function About() {
  return (
    <>
      <h1 className="w-full text-center text-8xl font-extrabold tracking-wider">
        About
      </h1>
      <div className="w-full h-screen p-20 flex gap-10">
        <div className="w-[40%] ">
          <img 
            className="rounded-lg" 
            src="https://isieindia.com/wp-content/uploads/2022/11/EV-1-906x543.jpg "
            alt=""
          />
        </div>
        <div className="w-[50%]">
          <p className="text-lg font-medium">
            1.Battery: Acts as the primary energy source, powering the scooter's
            motor and electronics.
            <br />
            2.Motor: Located in the rear wheel, it converts electrical energy
            into mechanical energy to propel the scooter.
            <br />
            3.Controller: Manages the flow of electricity from the battery to
            the motor, controlling speed and torque.
            <br /> 4.Converter: Steps down or transforms the voltage as required
            for different components.
            <br />
            5.Junction Box: Provides connections between various electrical
            components, enabling smooth communication.
            <br />
            6.MCB (Miniature Circuit Breaker): Protects the system by
            interrupting the circuit in case of electrical faults
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
