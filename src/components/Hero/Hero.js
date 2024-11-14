import * as React from "react";
import * as styles from "../Hero/Hero.module.css";
import heroImage from "../../images/korean.png";
import folha from "../../images/folha.png";
import foguete from "../../images/bx_rocket.png";
import fone from "../../images/fone.png";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>
          Comida <spam className={styles.colorText}>vegana, </spam> <br />{" "}
          saudável e fresca.
        </h1>
        <p>
          Não importa se você começou ontem no veganismo ou já está a tempos,
          temos algo que vai agradar o seu paladar.
        </p>
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>
            <img src={folha} alt="icon folha" className={styles.icon} />
            <p className={styles.text}>Fresco</p>
          </div>
          <div className={styles.iconWrapper}>
            <img src={foguete} alt="icon foquete" className={styles.icon} />
              <p className={styles.text}>Rápido</p>
          </div>
          <div className={styles.iconWrapper}>
            <img src={fone} alt="icon fone" className={styles.icon} />
            <p className={styles.text}>Suporte</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <img src={heroImage} alt="Comida vegana" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
