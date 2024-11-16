import * as React from "react";
import * as styles from "./Accessible.module.css";
import quote from "../../images/quote.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const AccessibleSection = () => {
  return (
    <section className={styles.accessibleSection}>
      <h2 className={styles.heading}>Acessível a todos</h2>
      <div className={styles.imageContainer}>
        <img
          src={quote}
          alt="Prato com comida vegana"
          className={styles.quoteImage}
        />

        <div className={styles.quoteText}>
          {/* Aspa inicial */}
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className={styles.quoteSymbolLeft}
          />
          <p className={styles.quoteParagraph}>
            Comida vegana não precisa ser cara e inacessível. O contra o
            elitismo tenta democratizar o acesso a esse tipo de produto.
          </p>
          {/* Aspa final */}
          <FontAwesomeIcon
            icon={faQuoteRight}
            className={styles.quoteSymbolRight}
          />
        </div>
      </div>
    </section>
  );
};

export default AccessibleSection;
