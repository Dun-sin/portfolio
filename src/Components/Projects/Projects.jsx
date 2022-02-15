import React from 'react'
import './Projects.css'
import Project from './Project/Project';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Works/Projects</h1>
      <div className="projects__project">
        <Project
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
        />
      </div>
    </div>
  )
}

export default Projects
