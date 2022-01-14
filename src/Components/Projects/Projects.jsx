import React from 'react'
import './Projects.css'
import Project from './Project/Project';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Works/Projects</h1>
      <div className="projects__project">
        <Project
          url="https://clone-a6012.web.app/"
          image="https://technext.ng/wp-content/uploads/2019/01/amazon.png"
          name="Amazon Clone"
          tech="React"
        />
        <Project
          url="https://weather-app-e.web.app/"
          image="https://media.gettyimages.com/photos/weather-picture-id184919103?s=612x612"
          name="Weather App"
          tech="React OpenWeatherAPI"
        />
        <Project
          url="https://apptodolis-t.web.app/"
          image="https://i.ibb.co/Fs6P58B/image-2022-01-14-06-55-20.png"
          name="Todo List"
          tech="React"
        />
      </div>
    </div>
  )
}

export default Projects
