import React from "react";
import * as styles from "./Family.module.css";
import family from "../../images/family.png";

const FamilySection = () => {
  return (
    <section className={styles.familySection}>
      <img src={family} alt="foto familia" className={styles.familyImage} />

      <p>
        Trabalhamos com produtos da agricultura familiar e incentivamos a
        produção de comida local.
      </p>
    </section>
  );
};

export default FamilySection;
