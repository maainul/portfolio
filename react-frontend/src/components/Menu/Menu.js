import React from "react";
import "./Menu.css";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReading,
  FcViewDetails,
  FcVideoProjector,
  FcBusinessContact
} from "react-icons/fc";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReading />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcViewDetails />
                Testimonial
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack" />
              </div>
              <div className="nav-link">
                <FcReading title="Education" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Project" />
              </div>
              <div className="nav-link">
                <FcViewDetails title="Testimonial" />
              </div>
              <div className="nav-link">
                <FcBusinessContact title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
