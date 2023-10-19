import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import { useTheme } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((preState) => (preState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluide home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsSun size={30} />
          )}
        </div>
        <div className="container home-content">
          <h1>Hi 👋 I'm a</h1>
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
              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
