import React from "react";
import nobleCause from "./assets/nobleCause.jpg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <p className={styles.para}>
          Crowdfunding is a powerful way to bring people together to support meaningful initiatives that create a positive impact in the world. By contributing to a noble cause, you become an essential part of a collective effort to drive change, whether it’s supporting education for underprivileged children, providing clean water to communities in need, or funding life-saving medical research. Every contribution, no matter how small, adds up to make a significant difference. Join us in this journey of compassion and generosity—your support not only helps achieve the goal but also inspires others to take action. Together, we can turn dreams into reality and create a brighter future for those who need it most. Be the change; be part of something bigger than yourself.
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
