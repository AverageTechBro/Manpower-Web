import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="top-section">
        <div className="footer-special-div">
          <Image src={"/footer-logo.svg"} width={100} height={100} />
          <div className="social-media-section">
            <li>Connect with us</li>
            <div className="social-media-image">
              <Image src={"/mpFacebook.svg"} width={100} height={100} />
              <Image src={"/mpInsta.svg"} width={100} height={100} />
              <Image src={"/mpTwitter.svg"} width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="footer-top-divs">
          <ul>
            <p>Employers</p>
            <li>Overview</li>
            <li>Recruitment Solutions</li>
            <li>Executive Search</li>
            <li>Get in Touch</li>
          </ul>
        </div>
        <div className="footer-top-divs">
          <ul>
            <p>Jobs</p>
            <li>Overview</li>
            <li>Find Job</li>
            <li>Meet our Consultants</li>
            <li>Send us your CV</li>
          </ul>
        </div>
        <div className="footer-top-divs">
          <ul>
            <p>Recources</p>
            <li>Browse all content</li>
            <li>Job Description</li>
          </ul>
        </div>
        <div className="footer-top-divs">
          <ul>
            <p>Quick Links</p>
            <li>Overview</li>
            <li>Our Work</li>
            <li>Our Story</li>
            <li>Our Purpose</li>
            <li>Our Commitments</li>
            <li>Careers</li>
            <li>Contacts</li>
          </ul>
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
          <p>@LOREM Int'l 2023</p>
        </div>
      </div>
    </div>
  );
}
