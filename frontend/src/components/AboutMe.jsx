import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mx-w-full md:h-[70vh] mt-[15rem] xl:px-[15rem] flex md:flex-row flex-col items-center md:items-start xl:gap-24 gap-12"
    >
      <img
        src="https://preview.colorlib.com/theme/arcwork/images/about_1.jpg"
        className="md:w-1/2 sm:w-2/3 h-full"
        alt=""
      />

      <div className="w-full px-5 md:px-0  sm:text-xl text-lg">
        <p className="mb-5 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start leading-8">
          Track work across the enterprise through an open, collaborative
          platform. Link issues across Jira and ingest data from other software
          development tools, so your IT support and operations teams have richer
          contextual information to rapidly respond to requests, incidents, and
          changes.
        </p>
        <p className="text-gray-500 leading-8 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.Accelerate critical development work,
          eliminate toil, and deploy changes with ease, with a complete audit
          trail for every change.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
