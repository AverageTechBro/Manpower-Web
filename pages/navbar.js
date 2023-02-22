import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Navbar() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 900) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main-navbar-container">
      <div className={`my-element ${fixed ? "fixed-class" : ""}`}>
        <div className="navbar-container color-for-navbar">
          <div className="left-side">
            <Image src={"/Union.svg"} width={90} height={50} />
          </div>
          <div className="right-side">
            <Link href="/secondPage">Home</Link>
            <a href="" className="navbar-element">
              About
            </a>
            <a href="" className="navbar-element">
              Contact Us
            </a>
            <a href="" className="navbar-element">
              Legal Documents
            </a>
            <a href="" className="navbar-element">
              Post Vaccancy
            </a>
            <button className="navbar-element">Send Resume</button>
          </div>
        </div>
      </div>
      <div className={`primary-navbar ${fixed ? "hide-display" : ""}`}>
        <div className="navbar-container scss-static-purpose">
          <div className="left-side">
            <Image src={"/Union.svg"} width={90} height={50} />
          </div>
          <div className="right-side">
            <Link href="/secondPage">Home</Link>
            <Link href="/thirdPage">About</Link>
            <Link href="/fourthpage">Contact Us</Link>
            <a href="" className="navbar-element">
              Legal Documents
            </a>
            <a href="" className="navbar-element">
              Post Vaccancy
            </a>
            <button className="navbar-element">Send Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
