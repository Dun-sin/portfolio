import React from 'react'
import './Projects.css'
// import Project from './Project/Project';
import Animate from 'animate.css-react';

import 'animate.css/animate.css'

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Works/Projects</h1>
      <div className="projects__project">
        <Animate
          enter="bounceIn" // on Enter animation
          leave="bounceOut" // on Leave animation
          appear="fadeInRight" // on element Appear animation (onMount)
          change="flipInX" // on element Change animation (onUpdate)
          durationAppear={1000}
          durationEnter={1000}
          durationLeave={1000}
          durationChange={1000}
          animate={true | false}
          animateChangeIf={true | false}
          component="ul"
        >
          <div className='soon'>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <p>Coming soon</p>
          </div>
        </Animate>
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
    </div>
  )
}

export default Projects
