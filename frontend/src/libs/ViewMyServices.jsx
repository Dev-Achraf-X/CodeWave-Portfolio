import React from "react";
import { Link } from "react-router-dom";

function ViewMyServices({ textSize }) {
  return (
    <Link
      to={"/service"}
      className={`text-[${textSize}] text-primary-600 font-bold underline underline-offset-8`}
    >
      VIEW MY SERVICES
    </Link>
  );
}

export default ViewMyServices;
