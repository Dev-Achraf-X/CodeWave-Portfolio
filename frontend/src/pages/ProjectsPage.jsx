import React from "react";
import Typewriter from "../libs/Typewriter";
import CardCPN from "../components/CardCPN";
import { motion } from "framer-motion";
import { ProjectData } from "../../public/data/ProjectData";
// import Pagination from "../libs/Pagination";

function ProjectsPage() {
  return (
    <div>
      <Typewriter
        isTyping={false}
        link={"/about"}
        linkTitle={"LEARN MORE"}
        title={"My Projects."}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-[1200px] mt-[16rem] mx-auto"
      >
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center mt-8 gap-5">
          {ProjectData.map((item) => (
            <CardCPN
              key={item.id}
              title={item.title}
              img={item.img}
              desc={item.desc}
            />
          ))}
        </div>
        {/* <div className="flex mt-10 justify-center">
          <Pagination />
        </div> */}
      </motion.div>
    </div>
  );
}

export default ProjectsPage;
