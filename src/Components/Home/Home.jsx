import React from 'react'
import './Home.css';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Technologies from './Technologies/Technologies';

const Home = () => {
  return (
    <div className="home" id="home">
      <div className='home__intro'>
        <h1 className='name'>Favour Opemipo Faiyetole</h1>
        <div className='introduction'>
          <p>Hello!</p>
          <p>I'm an Aspiring <strong>Full-Stack Web Developer</strong> based in Nigeria. My Technologies are Javascript, React, nodeJs, Sql, Java, Python,  but I mostly specialize in the <strong> MERN Stack(MongoDb, ExpressJs, ReactJs, NodeJs)</strong>.</p>
          <div className="home__icons">
            <a href={"https://github.com/Dun-sin"} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="github" />
            </a>
            <a href={"https://www.instagram.com/dunsin__codes/"} target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="instagram" />
            </a>
            <a href={"https://www.linkedin.com/in/favour-faiyetole-99a438229"} target="_blank" rel="noopener noreferrer">
              <LinkedIn className="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="home__tech">
        <div className='tech__header'>
          <h2>My Technologies</h2>
        </div>
        <Technologies />
      </div>
    </div>
  )
}

export default Home
