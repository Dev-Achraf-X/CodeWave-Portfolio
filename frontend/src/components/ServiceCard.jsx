import React from "react";

function ServiceCard({ title, desc, hover }) {
  return (
    <div
      className={
        hover
          ? "px-8 py-12 flex flex-col gap-5 bg-[#fff6da] border-2 border-transparent hover:bg-white hover:border-primary-600 transition-all"
          : "px-8 py-12 flex flex-col gap-5  bg-white border-primary-600 border-2 "
      }
    >
      <h1 className="text-primary-600 text-xl font-bold">{title}</h1>
      <p className="font-light">{desc}</p>
    </div>
  );
}

export default ServiceCard;
