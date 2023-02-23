import Link from "next/link";
import React, { useState } from "react";

const ToggleClass = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-menu">
      <button className="resume-button">Send Resume</button>
      <button className="toggler" onClick={handleClick}>
        Menu
      </button>
      <div className="toggled">
        <div className={isToggled ? "IItoggled" : "hello"}>
          <div className="tagged-side">
            <Link href="/secondPage">Home</Link>
            <Link href="/thirdPage">About</Link>
            <Link href="/fourthpage">Contact Us</Link>
            <a href="" className="navbar-element">
              Legal Documents
            </a>
            <a href="" className="navbar-element">
              Post Vaccancy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleClass;
