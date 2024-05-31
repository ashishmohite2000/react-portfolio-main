import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish </h1>
        <p className={styles.description}>
        I'm a computer science student with hands-on experience in Python, Kotlin, and JavaScript. Additionally, I am familiar with MySQL databases. My practical knowledge in these programming languages and 
        database management allows me to develop and maintain various applications and systems effectively.. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ashishmohite2729078@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
