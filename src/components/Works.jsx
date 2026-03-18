import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CardContent = ({ name, description, tags, image, source_code_link, live_demo_link }) => (
  <div className='flex flex-col h-full'>
    <div className='relative w-full h-[230px]'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'
      />

      <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
        {live_demo_link && (
          <div
            onClick={() => window.open(live_demo_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            title='Live Demo'
          >
            <svg className='w-1/2 h-1/2 fill-current text-white' viewBox='0 0 24 24'>
              <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8l6 4-6 4z'/>
            </svg>
          </div>
        )}
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          title='Source Code'
        >
          <img
            src={github}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
          />
        </div>
      </div>
    </div>

    <div className='mt-5 flex-1'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>
    </div>

    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
        </p>
      ))}
    </div>
  </div>
);

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  isMobile,
}) => {
  const cardProps = { name, description, tags, image, source_code_link, live_demo_link };

  if (isMobile) {
    return (
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col'>
        <CardContent {...cardProps} />
      </div>
    );
  }

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='flex'>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col'
      >
        <CardContent {...cardProps} />
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches || isMobileDevice());

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches || isMobileDevice());
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to the code repository and live demo. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
            isMobile={isMobile}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");