import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motio";
import { a } from "framer-motion/client";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <a href={experience.link} target="_blank">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="object-contain w-3/5 h-3/5"
          />
        </div>
      </a>
    }
  >
    <div className="text-2xl text-white">
      <h3>{experience.title}</h3>
      <p className="text-base font-bold text-secondary" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="pl-1 text-sm tracking-wider text-white-100"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
