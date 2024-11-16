import React from "react";
import * as styles from "./FooterSection.module.css";
import { StaticImage } from "gatsby-plugin-image";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection} id="contato">
      <div className={styles.footerLogo}>
        <StaticImage src="../../images/logo2.png" alt="Imagem logo" />
        <p className={styles.footerDescription}>
          Lorem ipsum dolor sit amet
          <br />
          consectetur adipisicing elit.
          <br />
          Distinctio asperiores expedita libero
          <br />
          tempora quisquam laboriosam.
        </p>
      </div>

      <div className={styles.footerHorarios}>
        <p className={styles.footerText}>Horários</p>
        <ul>
          <li>
            <span className={styles.day}>Segunda</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
          <li>
            <span className={styles.day}>Terça</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
          <li>
            <span className={styles.day}>Quarta</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
          <li>
            <span className={styles.day}>Quinta</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
          <li>
            <span className={styles.day}>Sexta</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
          <li>
            <span className={styles.day}>Sábado</span>
            <span className={styles.time}>11:00 - 15:00</span>
          </li>
        </ul>

        <div className={styles.footerTelefone}>
          <p className={styles.footerText}>Telefone</p>
          <p className={styles.street}>(16) 98765-1234</p>
        </div>
      </div>

      <div className={styles.footerMap}>
        <div className={styles.footerLocation}>
          <p className={styles.footerText}>Localização</p>
          <p className={styles.street}>Rua Alfredo Lopes 1717</p>
          <p className={styles.street}>CEP: 13560460</p>
        </div>

        <div className={styles.mapImage}>
          <StaticImage src="../../images/Mapa.png" alt="foto map" />
        </div>
      </div>

      <a
        href="https://wa.me/5516987651234"
        target="_blank" // Para abrir o WhatsApp em uma nova aba
        rel="noopener noreferrer"
        className={styles.whatsappLink}
        aria-label="Entre em contato pelo WhatsApp"
      >
        <StaticImage
          src="../../images/whatsapp.png"
          alt="WhatsApp"
          className={styles.whatsappIcon}
        />
      </a>
    </footer>
  );
};

export default FooterSection;
