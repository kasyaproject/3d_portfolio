import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motio";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServicesCard = ({ index, title, icon, link }) => {
  return (
    <Tilt className="w-full xs:w-64">
      <a href={link} target="_blank">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.74)}
          className="w-full p-1 green-pink-gradient rounded-3xl shadow-card"
        >
          <div
            option={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="flex flex-col items-center px-6 py-5 sm:px-12 bg-tertiary rounded-3xl sm:min-h-72 h-52 justify-evenly"
          >
            <img src={icon} alt={title} className="object-contain w-16 h-16" />
            <h3 className="text-xs font-bold text-center text-white sm:text-xl">
              {title}
            </h3>
          </div>
        </motion.div>
      </a>
    </Tilt>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-lg leading-8  text-secondary"
      >
        Previously, I worked as a Production Operator. However, with a strong
        educational background in Informatics Engineering, I have a deep passion
        and expertise in web application development, particularly using the
        Laravel and Tailwind CSS frameworks. Leveraging my experience and
        knowledge in information technology, I am committed to fully
        transitioning to web development and making a meaningful contribution to
        the industry.
      </motion.p>

      <div className="grid grid-cols-2 gap-6 mt-14 md:gap-10 md:flex md:flex-wrap">
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
