import Image from "next/image";
export default function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-top-section">
        <h1>
          <span>Talented people</span> are the centre <br /> of everything we do
        </h1>
      </div>
      <div className="testimonial-bottom-section">
        <div className="bottom-section-divI">
          <div className="profile">
            <Image src={"/testimonialI.svg"} width={50} height={50} />
            <p>
              MiyaPickett <br /> <span>CEO</span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            nostrud exercitation
          </p>
        </div>
        <div className="bottom-section-divII">
          <div className="profile">
            <Image src={"/testimonialII.svg"} width={50} height={50} />
            <p>
              Brian Fury <br /> <span>HR Manager</span>
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua quis
            nostrud exercitation
          </p>
        </div>
      </div>
      <div className="arrow-container">
        <Image src={"/arrowleft.svg"} width={50} height={50} />
        <Image src={"/arrowright.svg"} width={50} height={50} />
      </div>
    </div>
  );
}
