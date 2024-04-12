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

function HomePage() {
  return (
    <div>
      <Typewriter
        isTyping={true}
        link={"/services"}
        linkTitle={"VIEW MY SERVICES"}
      />
      <motion.div
        className="max-w-[1200px] h-[78vh]  mx-auto my-16 flex flex-col justify-around lg:flex-row items-center gap-5"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ServiceCard
          title="Financial Analysis"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={true}
        />
        <ServiceCard
          title="Marketing Plans"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="false"
          showLink={true}
        />
        <ServiceCard
          title="Optimize Solutions"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed!"
          hover="true"
          showLink={true}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] h-[75vh] mx-auto half-bg2"
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
        className="max-w-[1200px] mx-auto"
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
          <CardCPN
            title="Traveler Website"
            img="https://i.pinimg.com/originals/d2/d7/5a/d2d75a965b13526fccba23c44d858b7e.png"
            desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
          <CardCPN
            title="Portfolio Website"
            img="https://miro.medium.com/v2/resize:fit:1358/0*ww3YQrY7x5aIWRv0"
            desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
          <CardCPN
            title="Medical Website"
            img="https://htmlcodex.com/wp-content/uploads/2021/05/hospital-website-template.jpg"
            desc="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
        </div>
      </motion.div>
      <Work2gCPN />
    </div>
  );
}

export default HomePage;
