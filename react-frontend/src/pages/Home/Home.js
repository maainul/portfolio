import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from '../../assets/docs/resume.txt'


const Home = () => {
  return (
    <>
      <div className="container-fluide home-container">
        <div className="container home-content">
          <h1>Hi I'm a</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer !",
                  "Mern Stack Developer !",
                  "React Native Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">My Resume</a>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
