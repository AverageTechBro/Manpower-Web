import Link from "next/link";
import ToggleClass from "./togglemenu";
import Image from "next/image";
import FooterSec from "./footersec";
export default function Third() {
  return (
    <div className="thirdpage-container">
      <div className="navbar-container color-for-navbar">
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
        <ToggleClass />
      </div>
      <div className="thirdpage-map-container">
        <div className="thirdpage-map-text">
          <Image src={"/th-map-logo.svg"} width={170} height={100} />
          <div className="text-container">
            <p>
              {" "}
              <Image src={"/th-map-loc.svg"} width={20} height={20} /> 66 Little
              Green Lanes, Sutton Coldfield, <br /> <span>B73 5NB</span>
            </p>
            <p>
              {" "}
              <Image src={"/th-map-call.svg"} width={20} height={20} />{" "}
              977-123-456789, 01-123-485-898
            </p>
          </div>
        </div>
      </div>
      <div className="third-page-contact">
        <div className="contact-padding">
          <ul>
            <li></li>
            <p className="orange-text">CONTACT US</p>
            <li></li>
          </ul>
          <h1>GET IN TOUCH WITH US</h1>
          <p className="sub-text">Lorem ipsum sit amet</p>
          <div className="search-container">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="Subject" />
          </div>
          <input
            className="main-input"
            type="text"
            placeholder="Your Message"
          />
          <button>Submit</button>
        </div>
      </div>
      <div className="thirdpage-padding"></div>
      <FooterSec />
    </div>
  );
}
