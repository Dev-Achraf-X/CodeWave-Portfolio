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
          Hello, I'm Achraf, a passionate web developer and designer dedicated
          to crafting captivating digital experiences. With a blend of technical
          expertise and creative flair, I thrive on bringing ideas to life
          through innovative design and seamless functionality.
          <br /> <span className="font-bold">As a Web Developer: </span>
          <br />
          In the realm of development, I excel in turning concepts into reality
          with clean, efficient code. Proficient in a range of programming
          languages, frameworks, and tools, I specialize in building robust,
          scalable web applications that stand the test of time. From front-end
          development using HTML, CSS, and JavaScript to back-end development
          with Node.js, Express, and MongoDB, I leverage the latest technologies
          to deliver exceptional user experiences.
        </p>
        <p className="text-gray-500 leading-8 dark:text-gray-400">
          <span className="font-bold">As a Web Designer:</span>
          <br /> In the realm of design, I combine aesthetic vision with
          user-centric principles to create visually stunning interfaces that
          captivate and engage audiences. With a keen eye for detail and a deep
          understanding of design fundamentals, I craft elegant layouts,
          intuitive navigation, and compelling visuals that elevate brands and
          inspire action. Whether it's designing wireframes, mockups, or
          prototypes, I prioritize usability, accessibility, and seamless
          interaction across all devices.
          <br /> <span className="font-bold">Why Work With Me:</span>
          <br />{" "}
          <span className="underline underline-offset-4 font-semibold">
            Versatility:
          </span>{" "}
          As both a developer and designer, I offer a holistic approach to
          digital projects, ensuring cohesive integration of design and
          functionality.
          <br />
          <span className="underline underline-offset-4 font-semibold">
            Creativity:
          </span>{" "}
          I thrive on pushing boundaries and exploring new creative horizons,
          bringing fresh perspectives to every project I undertake.
          <br />
          <span className="underline underline-offset-4 font-semibold">
            Collaboration:
          </span>{" "}
          I believe in the power of collaboration and value open communication,
          working closely with clients and stakeholders to achieve shared goals.
          <br />{" "}
          <span className="underline underline-offset-4 font-semibold">
            Continuous Improvement:
          </span>{" "}
          I am committed to lifelong learning and stay abreast of the latest
          trends and technologies in web development and design.
          <br />
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
