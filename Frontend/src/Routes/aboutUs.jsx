import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs-iiitm.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          At the heart of our crowdfunding platform is a shared vision of empowering individuals and communities to create meaningful change. We believe that every idea, no matter how big or small, has the potential to make a difference when supported by a collective effort. Our platform is designed to bridge the gap between dreamers and doers, providing a space where innovative projects, social causes, and creative endeavors can come to life. Whether it’s funding a startup, supporting a charitable initiative, or bringing an artistic vision to reality, we are here to connect passionate creators with a global community of backers who believe in their mission.
          <br />
          <br />
          What sets us apart is our commitment to transparency, inclusivity, and impact. We’ve built a user-friendly platform that ensures seamless navigation for both project creators and supporters. Our tools and resources are tailored to help creators tell their stories effectively, set realistic goals, and engage with their audience. For supporters, we offer a secure and trustworthy environment where they can discover projects aligned with their values and contribute with confidence. Every campaign on our platform is a testament to the power of collaboration, proving that when people come together, extraordinary things can happen.
          <br />
          <br />
          But we’re more than just a platform—we’re a movement. Our mission is to inspire and empower individuals to take action, whether by launching a campaign or supporting one. We celebrate the diversity of ideas and the passion behind every project, knowing that each one has the potential to create a ripple effect of positive change. By joining our community, you’re not just funding a project; you’re becoming part of a global network of changemakers who are redefining what’s possible. Together, we can turn dreams into reality, one campaign at a time. Welcome to a platform where innovation meets compassion, and where every contribution matters.
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
