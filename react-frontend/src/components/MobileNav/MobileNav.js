import React from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile nav-header">
          <GiHamburgerMenu size={30} className="mobile-nav-header-icon" />
          <span className="mobile-nav-title">My Portfolio</span>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
