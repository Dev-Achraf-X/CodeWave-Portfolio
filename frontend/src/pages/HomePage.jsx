import React from "react";
import Typewriter from "../libs/Typewriter";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import TitleCPN from "../components/TitleCPN";
import SliderFeatCPN from "../components/SliderFeatCPN";
import TestoSlider from "../components/TestoSlider";
import { Link } from "react-router-dom";
import CardCPN from "../components/CardCPN";
import Work2gCPN from "../components/Work2gCPN";
import { ServiceData } from "../../public/data/ServiceData";
import { ProjectData } from "../../public/data/ProjectData";

function HomePage() {
  const showService = ServiceData.slice(0, 3);
  const showProject = ProjectData.slice(0, 3);
  return (
    <div>
      <Typewriter
        isTyping={true}
        link={"/services"}
        linkTitle={"VIEW MY SERVICES"}
      />
      <motion.div
        className="max-w-[1200px]   mx-auto my-[16rem] grid lg:grid-cols-3 sm:grid-cols-2 gap-5"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {showService.map((item) => (
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
        className="max-w-[1200px] h-[45rem] mx-auto half-bg2"
      >
        <div className="w-full py-24">
          <TitleCPN title="My Features" />
          <div className="w-full py-20">
            <SliderFeatCPN />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[800px] mx-auto"
      >
        <TitleCPN title={"Testimonials"} />
        <div className="py-12">
          <TestoSlider />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] md:mt-[16rem] mt-[8rem] mx-auto"
      >
        <div className="flex items-center justify-between">
          <TitleCPN title={"Projects"} />
          <Link
            to={"/projects"}
            className="hover:text-primary-500 hover:underline hover:underline-offset-4 transition-all font-serif mr-3 md:ml-0"
          >
            View All
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center mt-8 gap-5">
          {showProject.map((item) => (
            <CardCPN
              key={item.id}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
      </motion.div>
      <Work2gCPN isService={true} />
    </div>
  );
}

export default HomePage;
