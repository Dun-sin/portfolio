import React from 'react'
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
    console.log(age_now);
    return age_now;
  }

  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        My name is Favour, I'm {calculate_age()} years old and studying computer science at the Elizade University in Ondo state, Nigeria. My first step towards becoming a web developer was learning web development since I've always thought that creating websites and web applications would be fun, and I wanted to try it for myself.
      </p>
    </div>
  )
}

export default About
