import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const courses = [
  "CS Introduction",
  "Data Structures",
  "Algorithms",
  "Operating Systems",
  "Computer Architecture",
  "Database Systems",
  "Networks",
];

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Where I study</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='mt-10 bg-black-100 rounded-2xl p-8'
      >
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div>
            <h3 className='text-white font-bold text-[24px]'>Bar-Ilan University</h3>
            <p className='text-[#3b82f6] font-semibold text-[18px] mt-1'>
              B.Sc. Software Engineering
            </p>
          </div>
          <span className='text-secondary text-[16px] font-medium whitespace-nowrap'>
            2023 – 2027
          </span>
        </div>

        <div className='mt-6'>
          <p className='text-secondary text-[14px] uppercase tracking-wider mb-3'>
            Relevant Coursework
          </p>
          <div className='flex flex-wrap gap-2'>
            {courses.map((course) => (
              <span
                key={course}
                className='bg-tertiary text-white text-[13px] font-medium px-3 py-1 rounded-full'
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
