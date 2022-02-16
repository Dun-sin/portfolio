import React, { useEffect, useRef } from 'react'
import './Home.css';
// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

// components
import ButtonMailto from '../Email/ButtonMailto';

const Home = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const headerText = ["Hi, I'm Favour", "Problem Solver", "Web Developer", "Nigerian", "Awesome", "Love to Code"]
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 500;

    let textArrayIndex = 0;
    let charIndex = 0;
    let cursorSpan = cursorRef.current;
    let typedTextSpan = textRef.current;

    const type = () => {
      if (charIndex < headerText[textArrayIndex].length) {
        if (cursorSpan.classList.value !== "typing") {
          cursorSpan.classList.add("typing")
        }
        typedTextSpan.textContent += headerText[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.value !== "typing") {
          cursorSpan.classList.add("typing")
        }
        typedTextSpan.textContent = headerText[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= headerText.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 500);
      }
    }

    const start = () => {
      if (headerText.length) {
        setTimeout(type, newTextDelay + 250);
      }
    }
    start();
  }, []);

  return (
    <div className="home">
      <div className='introduction'>
        <div className='name'><p ref={textRef}></p><span ref={cursorRef}>&nbsp;</span></div>
        <div className='home__intro'>
          <div>
            <p>An aspiring <strong>Full-Stack Web Developer</strong></p>
            <p>based in Nigeria, specializing </p>
            <p>in the <strong> MERN Stack</strong></p>
          </div>
          <div className="home__contact">
            <ButtonMailto label="Get In Touch" mailto="mailto:faiyetolef@gmail.com" />
            <div className="home__icons">
              <a className="github" href={"https://github.com/Dun-sin"} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a className="instagram" href={"https://www.instagram.com/dunsin__codes/"} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a className="linkedin" href={"https://www.linkedin.com/in/favour-faiyetole-99a438229"} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="svg">
        <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stop-color="rgba(0, 148, 255, 1)" offset="0%"></stop>
              <stop id="stop2" stop-color="rgba(4.681, 41.855, 68.73, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient)" d="M21.9,-38C27.6,-34.7,30.9,-27.2,33.4,-20.2C35.8,-13.2,37.4,-6.6,38.2,0.4C39,7.5,38.9,14.9,36.3,21.7C33.6,28.4,28.5,34.4,22,38.2C15.6,42,7.8,43.5,0.8,42.2C-6.3,40.9,-12.5,36.7,-19.5,33.2C-26.5,29.7,-34.2,27,-38.4,21.5C-42.7,16.1,-43.5,8.1,-42.9,0.3C-42.3,-7.4,-40.4,-14.8,-36.9,-21.6C-33.4,-28.3,-28.4,-34.4,-22,-37.3C-15.6,-40.2,-7.8,-40,0.2,-40.3C8.1,-40.5,16.2,-41.3,21.9,-38Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" stroke="url(#sw-gradient)"></path>              </svg>
      </div>
    </div >
  )
}

export default Home
