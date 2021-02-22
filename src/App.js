import React from "react";
import "./App.css";
import "nes.css/css/nes.min.css";

export const App = () => {
  return (
    <div className="main">
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <a
                  className="nes-text"
                  href="https://www.facebook.com/nikamgalo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  facebook
                </a>
              </li>
              <li>
                <a
                  className="nes-text"
                  href="https://twitter.com/nikamgalo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter
                </a>
              </li>
              <li>
                <a
                  className="nes-text"
                  href="https://github.com/nmgalo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="clear"></div>
      </header>
      <main>
        <h1>Hello, I am Nika</h1>
        <p>Android developer</p>
      </main>
      <section id="about-me">
        <div className="container">
          <h2>About me</h2>
          <p>
            I am a full stack web and android developer with experience in
            back-end web and mobile development for more than three years. I've
            got considerable working experience with Kotlin and numerous
            JavaScript frameworks, especially ReactJS and Vue.JS. Currently I'm
            a student at Business and Technology University in Tbilisi and
            junior Android developer at Wandio
          </p>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <h2>Portfolio</h2>

          <ul class="nes-list is-disc">
            <li>
              <a
                href="https://formulanews.ge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                formulanews.ge
              </a>
              &nbsp; Built one of the most popular news website in georgia, has
              more than 500K visitors per Month
              <ul className="nes-list is-circle">
                <li>Worked on a high load project</li>
                <li>Maintained legacy PHP project</li>
                <li>Developed Content Management System for journalists</li>
              </ul>
            </li>

            <li>
              <a
                href="https://nation.ge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                nation.ge
              </a>
              &nbsp; Built news media website
              <ul className="nes-list is-circle">
                <li>Worked on a high load project</li>
                <li>Maintained legacy PHP project</li>
                <li>Developed Content Management System for journalists</li>
              </ul>
            </li>

            <li>
              <a
                href="https://kiu.edu.ge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                kiu.edu.ge
              </a>
              &nbsp; Built website and CMS for Kutaisi international university
              <ul className="nes-list is-circle">
                <li>Wrote front-end using Bootstrap and jQuery Libraries.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
