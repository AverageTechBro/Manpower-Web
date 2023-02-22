import Link from "next/link";
import Image from "next/image";
import FooterSec from "./footersec";
export default function Fourth() {
  return (
    <div className="fourthpage-container">
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
      <div className="fourthpage-wallpaper">
        <h1>ABOUT US</h1>
      </div>
      <div className="vaccancy-intro-container">
        <Image src={"/vacc-Img.svg"} width={650} height={600} />
        <div className="vaccancy-intro-text">
          <ul>
            <li></li>
            <p>ABOUT</p>
            <li></li>
          </ul>
          <h1>About the Company</h1>
          <p>
            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
            eros. Fusce rutrum, lectus in blandit sagittis, mi tortor
            ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et
            neque sodales porta eu eget dui. Nunc eu quam sit amet justo
            elementum mollis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla,
            in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.
            Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor
            id lobortis eu, lacinia id sem.
          </p>
        </div>
      </div>
      <div className="fourthpage-choose-container">
        <ul>
          <li></li>
          <p>ABOUT</p>
          <li></li>
        </ul>
        <h1>Reasons to Choose US</h1>
      </div>
      <FooterSec />
    </div>
  );
}
