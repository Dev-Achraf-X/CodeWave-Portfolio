import React from "react";
import Typewriter from "../libs/Typewriter";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import TestoSlider from "../components/TestoSlider";
import TitleCPN from "../components/TitleCPN";
import Work2gCPN from "../components/Work2gCPN";

function ServicesPage() {
  return (
    <div>
      <Typewriter
        isTyping={false}
        title={"My Services."}
        link={"/contact"}
        linkTitle={"GET IN TOUCH"}
      />
      <motion.div
        className="max-w-[1200px]  mx-auto mt-[15rem] grid grid-cols-3 gap-5"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ServiceCard
          title="Financial Analysis"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={false}
        />
        <ServiceCard
          title="Marketing Plans"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="false"
          showLink={false}
        />
        <ServiceCard
          title="Optimize Solutions"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={false}
        />
        <ServiceCard
          title="Financial Analysis"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={false}
        />
        <ServiceCard
          title="Marketing Plans"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={false}
        />
        <ServiceCard
          title="Optimize Solutions"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={false}
        />
      </motion.div>
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
      <Work2gCPN />
    </div>
  );
}

export default ServicesPage;
