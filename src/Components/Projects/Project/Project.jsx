import React from 'react'
import '../Project/Project.css';

const Project = (props) => {
  return (
    <div className="project">
      <a href={props.url} target="_blank" rel="noreferrer noopener">
        <div className="project__image">
          <img src={props.image} alt="Project" />
        </div>
        <div className="project__info">
          <p className="info__nameSmall">{props.name}</p>
          <p className="info__nameTech">{props.tech}</p>
        </div>
      </a>
    </div>
  )
}

export default Project

