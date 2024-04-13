import React from "react";
import ViewMyServices from "../libs/ViewMyServices";
import { Link } from "react-router-dom";

function Work2gCPN({isService}) {
  return (
    <div className="w-full bg-[#fff6da] my-[15rem] py-24">
      <h1 className="md:text-2xl text-xl md:w-[900px] mx-auto px-3  mb-12 font-semibold text-primary-500">
        Let's Connect, Whether you're seeking a dynamic website, a user-friendly
        application, or a visually stunning design, I'm here to turn your vision
        into reality. Let's collaborate and create something extraordinary
        together. Feel free to reach out and start the conversation.
      </h1>
      <div className="md:w-[900px] mx-auto text-center md:text-left flex md:flex-row flex-col gap-8 justify-between items-center">
        <ViewMyServices isService={isService} />
        <Link to={'/contact'} className="text-xl font-bold text-white bg-primary-500 p-4 rounded">Contact Me</Link>
      </div>
    </div>
  );
}

export default Work2gCPN;
