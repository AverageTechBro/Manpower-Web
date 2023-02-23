import Image from "next/image";
export default function FooterSec() {
  return (
    <div className="footer-sec-container">
      <div className="top-section">
        <div>
          <p>Quick Links</p>
          <ul>
            <li>About Us</li>
            <li>Required Documents</li>
            <li>Legal Documents</li>
            <li>Sample Demand Letter</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p>Contact Info</p>
          <ul>
            <li>Kathmandu Nepal</li>
            <li>+977-9812345678</li>
            <li>info@something.com</li>
            <li>lorem ipsum dolor</li>
          </ul>
        </div>
        <div>
          <p>News Letter</p>
          <p className="third-div-p">
            Subscribe to our news letter to get updates about latest jobs and
            notices
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Email" />
            <button>
              {" "}
              <Image src={"/sendicon.svg"} width={20} height={20} />{" "}
            </button>
          </div>
          <p className="third-div-p">Stay Connected with us through</p>
          <div className="social-media-images">
            <Image src={"/fbicon.svg"} width={50} height={50} />
            <Image src={"/inicon.svg"} width={50} height={50} />
            <Image src={"/twicon.svg"} width={50} height={50} />
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="left-side">
          <p>Privacy & Data</p>
          <p>Cookies</p>
          <p>Term & Conditions</p>
          <p>Legal</p>
        </div>
        <div className="right-side">
          <p>@ LOREM Int;l 2023</p>
        </div>
      </div>
    </div>
  );
}
