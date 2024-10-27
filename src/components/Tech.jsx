import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../style";
import { textVariant } from "../utils/motio";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10 text-center">
        <h2 className={styles.sectionHeadText}>Skill & Tools Experience</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skill&tool");
