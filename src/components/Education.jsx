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
        className='mt-10 green-pink-gradient p-[1px] rounded-2xl'
      >
        <div className='bg-primary rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start'>

          {/* Left — degree badge */}
          <div className='flex-shrink-0 flex flex-col items-center justify-center w-[90px] h-[90px] rounded-xl bg-[#151030] border border-[#804dee]/40 shadow-[0_0_20px_#804dee55]'>
            <span className='text-[36px] leading-none'>🎓</span>
          </div>

          {/* Right — info */}
          <div className='flex-1 min-w-0'>
            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1'>
              <div>
                <h3 className='text-white font-bold text-[22px] leading-tight'>
                  Bar-Ilan University
                </h3>
                <p className='mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#804dee] to-[#56ccf2] font-semibold text-[16px]'>
                  B.Sc. Software Engineering
                </p>
              </div>

              {/* Year badge */}
              <div className='flex items-center gap-2 sm:mt-1'>
                <span className='w-2 h-2 rounded-full bg-[#804dee] shadow-[0_0_8px_#804dee] flex-shrink-0' />
                <span className='text-secondary text-[14px] font-medium whitespace-nowrap'>
                  2023 – 2027
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className='mt-5 mb-4 h-[1px] bg-gradient-to-r from-[#804dee]/40 via-[#56ccf2]/20 to-transparent' />

            {/* Coursework */}
            <p className='text-secondary text-[12px] uppercase tracking-widest mb-3'>
              Relevant Coursework
            </p>
            <div className='flex flex-wrap gap-2'>
              {courses.map((course, i) => (
                <motion.span
                  key={course}
                  variants={fadeIn("up", "spring", 0.3 + i * 0.05, 0.5)}
                  className='text-[13px] font-medium px-3 py-[5px] rounded-full border border-[#804dee]/50 text-white/80 bg-[#804dee]/10 hover:bg-[#804dee]/25 hover:text-white transition-colors cursor-default'
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Education, "education");
