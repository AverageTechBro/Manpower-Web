import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./navbar";
import About from "./about";
import Services from "./services";
import OurServices from "./ourservices";
import Testimonial from "./testimonial";
import Investment from "./investment";
import Clients from "./client";
const inter = Inter({ subsets: ["latin"] });
import Blog from "./blog";
import Footer from "./footer";
import OppCard from "./oppurtunity-card";

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="landing-page-container">
        <Navbar />
        <div className="landing-page-text">
          <h1>
            DON'T MISS THE <br /> OPPURTUNITY
          </h1>
          <div className="landing-page-button-container">
            <button>I am a jobseeker </button>
            <button>I am an employer</button>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <OurServices />
      <Testimonial />
      <Investment />
      <Blog />
      <Clients />
      <OppCard />
      <Footer />
    </div>
  );
}
