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
          image="https://i.ibb.co/pyttjfv/image-2022-01-14-06-55-20.png"
          name="Todo List"
          tech="React"
          description="Make a list of all the things you have to do for the day"
        />
        <Project
          url="https://weather-app-e.web.app/"
          image="https://media.gettyimages.com/photos/weather-picture-id184919103?s=612x612"
          name="Weather App"
          tech="React OpenWeatherAPI"
          description="Find out the weather details of your favorite place"
        />
        <Project
          url="https://clone-a6012.web.app/"
          image="https://technext.ng/wp-content/uploads/2019/01/amazon.png"
          name="Amazon Clone"
          tech="React Firebase-Auth"
          description="Clone of the popular Amazon e-commerce site"
        />
      </div>
    </div>
  )
}

export default Projects
