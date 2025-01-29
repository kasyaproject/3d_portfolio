import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motio";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployment_link,
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
        className="w-full p-5 sm:min-h-[500px] bg-tertiary rounded-2xl sm:w-96"
      >
        {/* Image background */}
        <div className="relative w-full h-40 sm:h-52">
          <img
            src={image}
            alt={name}
            className="object-center w-full h-full rounded-md"
          />

          {/* Image button Website */}
          {deployment_link ? (
            <div
              className="absolute top-3 left-3 card-img_hover tooltip tooltip-bottom"
              data-tip="Demo"
            >
              <div
                onClick={() => window.open(deployment_link, "_blank")}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
              >
                <img
                  src={web}
                  alt="web"
                  className="object-contain w-1/2 h-1/2"
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Image button Github */}
          <div
            className="absolute top-3 right-3 card-img_hover tooltip tooltip-bottom"
            data-tip="Code"
          >
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
          <h3 className="text-sm font-bold text-white sm:text-base">{name}</h3>
          <p className="mt-2 text-xs sm:text-sm text-secondary">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="pb-2 ">
          <div className="flex flex-wrap w-full gap-2 mt-4 ">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-xs sm:text-sm ${tag.color}`}>
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

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
