import React from "react";
import "./App.css";
import "nes.css/css/nes.min.css";

export const App = () => {
  const monthDiff = (startDate) => {
    if (startDate > Date()) [startDate, Date] = [Date(), startDate];
    let diffMonths = (new Date().getFullYear() - startDate.getFullYear()) * 12;
    diffMonths -= startDate.getMonth();
    diffMonths += new Date().getMonth();
    return diffMonths;
  };

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
          <p>Nice to meet you !</p>
          <p>
            I'm Nika, a 19 y/o student in BTU and currently worked at&nbsp;
            <a
              href="https://wandio.com/"
              target="_blank"
              rel="noreferrer"
              class="text-link"
            >
              WANDIO
            </a>
            , my specialization (and passion) is Android development with Kotlin
          </p>
          <p>
            Also i am a full stack web developer more than three years. I've got
            considerable working experience with numerous JavaScript frameworks,
            especially ReactJS and Vue.JS.
          </p>
          <p>
            For the past&nbsp;{monthDiff(new Date(1601294400000))} month I've
            been building Android applications, client-side webs, developing
            application databases, for businesses.I've done this as an employee,
            and a freelancer.
          </p>
        </div>
      </section>
      <section id="portfolio">
        <div className="container">
          <h2>Work Experience</h2>

          <ul className="nes-list is-disc">
            <li>
              Wandio - Junior Android developer, October 2020 - present
              <ul className="nes-list is-circle">
                <li>Application Development for Android.</li>
                <li>Maintaining existing application.</li>
              </ul>
            </li>
            <li>
              Proservice.ge - Full-stack web developer, September 2019 -
              Octomber 2020
              <ul className="nes-list is-circle">
                <li>Worked on a high load projects.</li>
                <li>maintained legacy PHP projects.</li>
                <li>
                  Wrote front-end of some responsive web sites using: Bootstrap
                  and jQuery Libraries.
                </li>
                <li>
                  Wrote Front-End of TV Formula's project{" "}
                  <a
                    href="https://formula.ge/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    formula.ge
                  </a>{" "}
                  , using: HTML5, CSS3, video.js
                </li>
                <li>
                  Implement Live Stream for TV Formula,{" "}
                  <a
                    href="https://formulanews.ge/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    formulanews.ge
                  </a>
                </li>
                <li>
                  Designed and implemented HTTP API for Android and IOS clients.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
