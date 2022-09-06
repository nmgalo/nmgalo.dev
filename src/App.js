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
        <h1>Hello, I'm Nika</h1>
        <p>Android developer</p>
      </main>
    </div>
  );
};

export default App;
