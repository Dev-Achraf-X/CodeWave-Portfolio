import React from "react";
import Typewriter from "../libs/Typewriter";
import CardCPN from "../components/CardCPN";
import { motion } from "framer-motion";
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
        {/* <div className="flex mt-10 justify-center">
          <Pagination />
        </div> */}
      </motion.div>
    </div>
  );
}

export default ProjectsPage;
