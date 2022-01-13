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
      <div>
        <h1>About Me</h1>
        <p>
          My name is Favour, I’m {calculate_age()} and I’m a Computer science student at the Elizade University, Ondo State, Nigeria.
          Learning web development was my first step towards becoming a web developer, because building websites and web applications always seemed like a fun thing to do and I was eager to do it myself.
        </p>
      </div>
    </div>
  )
}

export default About
