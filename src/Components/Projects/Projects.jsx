import React from 'react'
import './Projects.css'
// import Project from './Project/Project';

import { motion } from "framer-motion";

const Projects = () => {
  const dotContainerVariant = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const dotVariant = {
    start: {
      y: '0%'
    },
    end: {
      y: '100%'
    }
  }

  const dotTransition = {
    duration: 0.4,
    yoyo: Infinity,
  }

  const pageTransition = {
    in: {
      opacity: 1,
      y: "0"
    },
    out: {
      opacity: 0,
      y: "-100vh"
    }
  }

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={pageTransition}
      className="projects"
      id="projects">
      <div className="projects__project">
        <div className='soon'>
          <motion.div
            initial="start"
            animate="end"
            variants={dotContainerVariant}
            className="dots">
            <motion.div
              variants={dotVariant}
              transition={dotTransition}
              className="dot">
            </motion.div>
            <motion.div
              variants={dotVariant}
              transition={dotTransition}
              className="dot">
            </motion.div>
            <motion.div
              transition={dotTransition}
              variants={dotVariant}
              className="dot">
            </motion.div>
          </motion.div>
          <p>Coming soon</p>
        </div>
        {/* <Project
          url="https://apptodolis-t.web.app/"
          image="https://i.ibb.co/1f9QvMD/image-2022-01-18-20-51-28.png"
          name="Todo List"
          tech="React"
          description="Make a list of all the things you have to do for the day"
        />
        <Project
          url="https://weather-app-e.web.app/"
          image="https://i.ibb.co/6ypTF2n/image-2022-01-18-20-15-06.png"
          name="Weather App"
          tech="React OpenWeatherAPI"
          description="Find out the weather details of your favorite place"
        />
        <Project
          url="https://clone-a6012.web.app/"
          image="https://i.ibb.co/b5dmFk5/image-2022-01-18-20-14-59.png"
          name="Amazon Clone"
          tech="React Firebase-Auth"
          description="Clone of the popular Amazon e-commerce site"
        /> */}
      </div>
    </motion.div >
  )
}

export default Projects
