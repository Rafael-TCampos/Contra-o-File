import * as React from "react";
import * as styles from "../Hero/Hero.module.css";
import heroImage from "../../images/korean.png"

const Hero = ()=> {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
      <h1 className={styles.heroTitle}>Comida <spam className={styles.colorText}>
       vegana </spam> saudável e fresca.</h1>
      <p>
      Não importa se você começou ontem 
       no veganismo ou já está a tempos,
      temos algo que vai agradar o seu paladar.
      </p>
      </div>
      <div className={styles.imgContainer}>
        <img src={heroImage} alt="Comida vegana" className={styles.heroImage} />
      </div>
    </section>
  )
}

export default Hero;