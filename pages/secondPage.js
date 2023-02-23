import Link from "next/link";
import Image from "next/image";
import JobBox from "./jobBox";
import ToggleClass from "./togglemenu";
import FooterSec from "./footersec";
export default function Second() {
  return (
    <div className="secondpage-container">
      <div>
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
      </div>
      <div className="vaccancy-intro-container">
        <Image src={"/vacc-Img.svg"} width={650} height={600} />
        <div className="vaccancy-intro-text">
          <ul>
            <li></li>
            <p>VACCANCIES</p>
            <li></li>
          </ul>
          <h1>Open to New Possibilities</h1>
          <p>
            Nunc eu quam sit amet justo elementum mollis. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet
            semper tortor ac posuere.{" "}
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Search Jobs.." />
            <button>
              {" "}
              <Image src={"/searchicon.svg"} width={40} height={29} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="jobbox-header">
        <h1>Open Vaccancies at LOREM Int'l</h1>
      </div>
      <div className="secondpage-jobbox-container">
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
        <JobBox
          title={"Skilled Maintenace Engineer"}
          sector={"Manufacturing"}
          industry={"Manufacturing and Production"}
          workplace={"Oxforshire"}
          deadline={"2023-03-03"}
          date={"2023-01-08"}
        />
      </div>
      <FooterSec />
    </div>
  );
}
