import React from "react";
import Typewriter from "../libs/Typewriter";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import TestoSlider from "../components/TestoSlider";
import TitleCPN from "../components/TitleCPN";
import Work2gCPN from "../components/Work2gCPN";
import { ServiceData } from "../../public/data/ServiceData";

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
        className="max-w-[1200px]  mx-auto mt-[15rem] grid lg:grid-cols-3 sm:grid-cols-2 gap-5"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {ServiceData.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            hover={item.hover}
          />
        ))}
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
      <Work2gCPN isService={false} />
    </div>
  );
}

export default ServicesPage;
