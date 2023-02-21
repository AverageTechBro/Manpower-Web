import Image from "next/image";
export default function Services() {
  return (
    <div className="services-container">
      <div className="services-top-section">
        <h1>
          A Full Range of <span>Talented Services</span>
        </h1>
        <p>
          Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros.
          Fusce rutrum, lectus in blandit sagittis, mi <br /> tortor ullamcorper
          mi, vitae vestibulum libero quam{" "}
        </p>
      </div>
      <div className="services-bottom-section">
        <div className="services-divI">
          <h1>Contract Recruitment</h1>
          <p>
            Hire contractors or temps to strengthen your workforce. When it
            matters most, seize every opportunity.
          </p>
          <Image src={"/circle-rightarrow.svg"} width={50} height={50} />
        </div>
        <div className="services-divII">
          <h1>Permanent Recruitment</h1>
          <p>
            Hire contractors or temps to strengthen your workforce. When it
            matters most, seize every opportunity.
          </p>
          <Image src={"/circle-rightarrow.svg"} width={50} height={50} />
        </div>
        <div className="services-divIII">
          <h1>Executive Search</h1>
          <p>
            Hire contractors or temps to strengthen your workforce. When it
            matters most, seize every opportunity.
          </p>
          <Image src={"/circle-rightarrow.svg"} width={50} height={50} />
        </div>
        <div className="services-divIV">
          <h1>Talent Solutions</h1>
          <p>
            Hire contractors or temps to strengthen your workforce. When it
            matters most, seize every opportunity.
          </p>
          <Image src={"/circle-rightarrow.svg"} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
