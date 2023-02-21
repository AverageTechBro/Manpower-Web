import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    });

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>
          About the <span>Company</span>
        </h1>
        <p className="reveal">
          Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros.
          Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi,
          vitae vestibulum libero quam a nisi. In eu mauris et neque sodales
          porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in.
        </p>
        <p className="reveal">
          Helping people is at the heart of our business; whether it is
          assisting a candidate to make their next career step or working with a
          client to man up a project, so it doesn’t miss a deadline. We never
          forget the human element are very aware of how our actions can effect
          people lives.Proin laoreet semper tortor ac posuere. Cras non leo at
          ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu,
          lacinia id sem.
        </p>
      </div>
      <div className="about-image-container">
        <Image src={"/about.svg"} width={500} height={500} />
        <div className="about-stats-container">
          <h1>100</h1>
          <p>Millions Turnover</p>
        </div>
        <div className="about-stats-containerII">
          <h1>2850</h1>
          <p>Contractors Appointed</p>
        </div>
        <div className="about-stats-containerIII">
          <h1>10</h1>
          <p>Branch Offices</p>
        </div>
      </div>
    </div>
  );
}
