import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="xl:w-[1200px] mx-auto  mt-[15rem] xl:pl-[12rem] xl:pr-[3rem] flex lg:flex-row flex-col items-center lg:items-start    gap-4"
    >
      <img
        src="https://preview.colorlib.com/theme/arcwork/images/about_1.jpg"
        className="max-w-[600px] h-[500px]"
        alt=""
      />

      <div className="w-full px-8 lg:px-0  sm:text-lg">
        <p className="mb-5 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start leading-8">
          Hi, I'm Achraf, a web developer and designer passionate about crafting
          engaging digital experiences. I blend technical skills with creative
          flair to bring ideas to life with innovative design and seamless
          functionality.
          <br /> <span className="font-bold">As a Web Developer: </span>
          <br />
          In development, I specialize in building robust, scalable web
          applications using various programming languages and frameworks. From
          front-end work with HTML, CSS, and JavaScript to back-end development
          with Node.js, Express, and MongoDB, I use the latest technologies to
          create great user experiences.
        </p>
        <p className="text-gray-500 leading-8 dark:text-gray-400">
          <span className="font-bold">As a Web Designer:</span>
          <br /> In design, I create visually appealing interfaces that engage
          audiences, prioritizing usability and accessibility across all
          devices. Whether it's wireframes, mockups, or prototypes, I enhance
          brand identity with elegant layouts and intuitive navigation.
          <br /> <br /> <span className="font-bold ">Why Work With Me:</span>
          <br /> I offer a holistic approach to digital projects, ensuring
          seamless integration of design and functionality. I thrive on pushing
          boundaries and exploring new creative horizons, collaborating closely
          with clients to achieve shared goals. Committed to lifelong learning,
          I stay updated with the latest trends and technologies in web
          development and design.
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
