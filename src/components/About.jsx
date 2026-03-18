import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a versatile software developer with strong foundations in C, C++, Python, and object-oriented programming, combined with practical experience across frontend, backend, and embedded systems.
        {" "}I build efficient, scalable, and user-centered applications using technologies like React, Node.js, Three.js, JavaScript, TypeScript, and CSS.
        {" "}I&apos;m a quick learner who enjoys tackling complex problems and turning innovative ideas into reliable, production-ready solutions.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");