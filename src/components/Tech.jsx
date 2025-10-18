import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../style";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motio";

const TechCard = ({ index, name, icon, link }) => {
  return (
    <Tilt className="w-28 sm:w-36">
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
            className="flex flex-col items-center p-4 bg-tertiary rounded-3xl justify-evenly"
          >
            <img
              src={icon}
              alt={name}
              className="object-contain w-8 h-8 mb-1 sm:w-16 sm:h-16"
            />
            <h3 className="text-xs font-bold text-center text-white">{name}</h3>
          </div>
        </motion.div>
      </a>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10 text-center">
        <h2 className={styles.sectionHeadText}>Skill & Tools Experience</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        {technologies.map((technology, index) => (
          <TechCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skill&tool");
