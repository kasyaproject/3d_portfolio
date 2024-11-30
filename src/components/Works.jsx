import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motio";
import { p } from "framer-motion/client";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Container */}
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full p-5 sm:h-[500px] bg-tertiary rounded-2xl sm:w-96"
      >
        {/* Image background */}
        <div className="relative w-full h-52">
          <img
            src={image}
            alt={name}
            className="object-center w-full h-full rounded-2xl"
          />

          {/* Image button Github */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 ">
          <h3 className="text-base font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
        </div>

        {/* Tags */}
        <div className="sm:absolute sm:bottom-">
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-sm ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="">
        <p className={styles.sectionSubText}>My Work & Project</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="max-w-3xl mt-3 text-xs leading-8 text-secondary"
        >
          Following project showcases my skills and experience through
          real-world examples of my work. Each project demonstrates my ability
          to effectively tackle challenges, implement innovative solutions, and
          deliver high-quality results. From concept to execution, I ensure that
          every aspect aligns with user needs and industry standards,
          highlighting my proficiency in fullstack development, UI/UX design.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 mt-20 lg:gap-20 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
