import React from "react";
import * as styles from "./Family.module.css";
import { StaticImage } from "gatsby-plugin-image";

const FamilySection = () => {
  return (
    <section className={styles.familySection}>
      <StaticImage src="../../images/family.png" alt="foto familia" className={styles.familyImage} />

      <p>
        Trabalhamos com produtos da agricultura familiar e incentivamos a
        produção de comida local.
      </p>
    </section>
  );
};

export default FamilySection;
