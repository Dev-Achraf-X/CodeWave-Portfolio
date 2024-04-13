import React from "react";
import { Link } from "react-router-dom";

function ViewMyServices({ isService }) {
  return isService ? (
    <Link
      to={"/service"}
      className={`text-xl text-primary-600 font-bold underline underline-offset-8`}
    >
      VIEW MY SERVICES
    </Link>
  ) : (
    <Link
      to={"/projects"}
      className={`text-xl text-primary-600 font-bold underline underline-offset-8`}
    >
      VIEW MY PROJECTS
    </Link>
  );
}

export default ViewMyServices;
