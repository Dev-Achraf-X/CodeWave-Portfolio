import React from "react";
import ViewMyServices from "../libs/ViewMyServices";

function ServiceCard({ title, desc, hover, showLink }) {
  return (
    <div
      className={
        hover === "true"
          ? "px-8 py-12 flex flex-col gap-5 bg-[#fff6da] border-2 border-transparent hover:bg-white hover:border-primary-600 transition-all"
          : "px-8 py-12 flex flex-col gap-5  bg-white border-primary-600 border-2 "
      }
    >
      <h1 className="text-primary-600 text-xl font-bold">{title}</h1>
      <p className="font-light">{desc}</p>
      {showLink ? <ViewMyServices textSize="10px" /> : ""}
    </div>
  );
}

export default ServiceCard;
