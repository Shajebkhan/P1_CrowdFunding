import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
            <h5>A Platform Built for Change </h5>
            <p>- Every donation you make goes directly to those in need, with full transparency on how funds are used.</p>
            <h5>A Platform Built for Change</h5>
            <p> – We connect compassionate donors with real causes, ensuring every contribution makes a meaningful difference.</p>
            <h5>Your Trust, Our Responsibility</h5>
            <p>– We prioritize accountability, security, and impact, so you can give with confidence.</p>
            <h5>Small Contributions, Big Impact</h5>
            <p>– Even a small donation can create ripples of change. Join us in making a difference.</p>
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
