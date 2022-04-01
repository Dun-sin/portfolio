import React from 'react'
import { motion } from 'framer-motion';
import './About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("2004-01-06");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
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
      className="about">
      <p>
        My name is Favour, a girl in tech who does cool and awesome things and who loves to make life easier and fun with code. I'm {calculate_age()} years old and studying computer science <br />
        My first step towards becoming a web developer was learning web development since I've always thought that creating websites and web applications would be fun, and I wanted to try it for myself.
        <br />
        <br />
        I use the MERN stack (MongoDB, Express, React, NodeJS) which makes me a Full-Stack Developer
        <br />
        <br />
        My hobbies include reading(Fiction and Non-Fiction), playing video games mostly on my laptop and coding (obviously I'm a developer).
        <br />
        <br />
        I love Watching movies(K-dramas are my favourite actually) and listening to music
        <br />
        <br />
        I have communication Skills, Patience, problem solving skills(as every developer says), as well as a great sense of humor(i don't know about this, I'm just guessing), time management skills, and most importantly the ability to focus (still working on this one).
      </p>
      <div className='achievement'>
        <h2>Achievement</h2>
        Sadly, This section is going to be empty for a long time
      </div>
    </motion.div>
  )
}

export default About
