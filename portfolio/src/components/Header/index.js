import React from 'react';
import { FaArrowDown, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './styles.css';

function Header() {
  return (
    <header>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Jobs
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I am Carlos Santos.</h1>
          <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
            Passionate fullstack developer with 5+ years of experience working collaboratively in teams from my past employers. <br />
            I consider myself as a fast learner, hard worker and always trying to be polite to talk with someone.  <br />
            My next goals are: improve my communication, learn and know more about several skills and became an excellent IT architect.
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://www.linkedin.com/in/chsantos3/" target="_blank">
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </li>
            <li>
              <a href="https://github.com/Carl13da" target="_blank">
                <FaGithub></FaGithub>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <FaArrowDown className="icon-down-circle"></FaArrowDown>
        </a>
      </p>
    </header>
  );
}

export default Header;
