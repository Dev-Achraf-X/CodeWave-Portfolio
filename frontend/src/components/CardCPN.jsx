import React from "react";
import { Link } from "react-router-dom";

function CardCPN({title, img, desc}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to="/projects">
        <img
          className="rounded-t-lg h-[55%]"
          src={img}
          alt="image"
        />
      </Link>
      <div className="font-thin text-lg text-gray-500 pt-5 pl-5">
        July 12, 2022 by <Link to={"/projects"} className="text-primary-500 font-semibold">ArtDev</Link>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        
      </div>
    </div>
  );
}

export default CardCPN;
