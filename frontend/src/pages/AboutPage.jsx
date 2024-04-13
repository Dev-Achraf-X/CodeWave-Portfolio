import React from "react";
import Typewriter from "../libs/Typewriter";
import AboutMe from "../components/AboutMe";
import TestoSlider from "../components/TestoSlider";
import TitleCPN from "../components/TitleCPN";
import { motion } from "framer-motion";
import Work2gCPN from "../components/Work2gCPN";

function AboutPage() {
  return (
    <div>
      <Typewriter
        isTyping={false}
        title={"About Me."}
        link={"/contact"}
        linkTitle={"GET IN TOUCH"}
      />
      <AboutMe />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[800px] mx-auto mt-[15rem]"
      >
        <TitleCPN title={"Testimonials"} />
        <div className="py-12">
          <TestoSlider />
        </div>
      </motion.div>
      <Work2gCPN isService={true} />
    </div>
  );
}

export default AboutPage;
