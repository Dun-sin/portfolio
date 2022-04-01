import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { saveAs } from "file-saver";
import './Home.css';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';

// components
import ButtonMailto from '../Email/ButtonMailto';
const Home = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  const handleDownload = () => {
    saveAs(
      "https://cdn.filesend.jp/private/RpgAx1LUYoVzLAxz7IUxr71om351Uw3F3lC0nKqQEXdqosNKia7nqdhfbywDXbot/Favour%27s%20resume.pdf",
      "Favour's Resume.pdf"
    )
  }

  useEffect(() => {
    const headerText = ["Hi, I'm Favour", "Awesome", "Love to Code"]
    const typingDelay = 150;
    const erasingDelay = 50;
    const newTextDelay = 400;

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

  const pageTransition = {
    in: {
      opacity: 1,
      y: "0%"
    },
    out: {
      opacity: 0,
      y: "-100%"
    }
  }

  return (
    <motion.div
      animate="in"
      exit="out"
      initial="out"
      variants={pageTransition}
      className="home">
      <div className='introduction'>
        <div className='name'><p ref={textRef}></p><span ref={cursorRef}>&nbsp;</span></div>
        <div className='home__intro'>
          <div>
            <p>A <strong>Full-Stack Web Developer</strong></p>
            <p>based in Nigeria, specializing </p>
            <p>in the <strong> MERN Stack</strong></p>
          </div>
        </div>
        <div className="home__contact">
          <span className='btn'>
            <ButtonMailto label="Get In Touch" mailto="mailto:faiyetolef@gmail.com" />
            <button className='resume' onClick={handleDownload}>Download Resume</button>
          </span>
          <div className="home__icons">
            <a className="github" href={"https://github.com/Dun-sin"} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
            <a className="instagram" href={"https://www.instagram.com/dunsincodes/"} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a className="linkedin" href={"https://www.linkedin.com/in/favour-faiyetole-99a438229"} target="_blank" rel="noopener noreferrer">
              <LinkedIn />
            </a>
            <a className='twitter' href={"https://twitter.com/Dunsin_codes"} target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className='svg'>
        <svg viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#026AB6"
            d="M44.1,-66.4C57.3,-60.1,68.2,-48.1,74,-34.1C79.8,-20.2,80.6,-4.2,79.9,12.6C79.1,29.3,76.8,47,67.8,60.3C58.7,73.6,42.8,82.6,26.4,85.4C9.9,88.2,-7,84.9,-21.1,77.9C-35.2,71,-46.5,60.6,-54.1,48.6C-61.6,36.7,-65.4,23.3,-65.4,10.6C-65.5,-2.2,-61.8,-14.4,-56,-24.9C-50.1,-35.4,-42.1,-44.2,-32.4,-52.1C-22.7,-60,-11.4,-66.9,2,-70.1C15.5,-73.3,30.9,-72.7,44.1,-66.4Z"
            transform="translate(100 100)" />
        </svg>
      </div>
    </motion.div>
  )
}

export default Home
