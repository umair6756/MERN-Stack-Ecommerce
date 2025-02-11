import React from "react";
import "./AboutUs.css";
import bannerImage from "../banners-image/about/hero.jpg";
import aboutImage from '../banners-image/about/about2.jpg'
import { HeroSection } from "./Buttons";

const AboutUs = () => {
  return (
    <div className="about-us-advanced">
      {/* Hero Section */}
      {/* <div className="hero-section">
        <img src={bannerImage} alt="About Us" className="hero-image" />
        <div className="hero-overlay">
          <h1>About Our Store</h1>
          <p>Where quality meets convenience</p>
        </div>
      </div> */}

      <HeroSection headingLabel="About Our Store" heroBackground="aboutHero"/>

      <div className="about-us">

        {/* Content Section */}
        <div className="content-section">
          <div className="card">
            <h2>Who We Are</h2>
            <p>
              Welcome to [Your Store Name], where we offer an unmatched shopping
              experience. From daily essentials to luxury items, we have
              everything for you.
            </p>
          </div>
          <div className="card">
            <h2>Our Mission</h2>
            <p>
              Our mission is simple: to provide top-quality products with
              exceptional service. Your satisfaction is our priority.
            </p>
          </div>
          <div className="card">
            <h2>Why Choose Us?</h2>
            <p>
              With thousands of happy customers, fast delivery, and competitive
              pricing, [Your Store Name] is your trusted shopping destination.
            </p>
          </div>
        </div>

        {/* picture  */}

        <div className="aboutUs-pic">
          <img src={aboutImage}></img>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
