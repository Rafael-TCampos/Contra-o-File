import * as React from "react";
import * as styles from "./Menu.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Menu = () => {
  return (
    <section className={styles.menu} id="cardapio">
      <h1 className={styles.title}>Cardápio</h1>
      <p className={styles.text}>Veganismo</p>
      <div className={styles.grid}>
        <article className={styles.item}>
          <h2>Segunda-feira</h2>
          <p>
            Moqueca de Palmito <br /> 400g
          </p>
          <p className={styles.price}>R$ 23,50</p>
          <StaticImage src="../../images/pene.jpeg" alt="Prato de Pene com molho de tomate e legumes" />
        </article>
        <article className={styles.item}>
          <h2>Terça-feira</h2>
          <p>
            Cogumelos Grelhados <br /> 400g
          </p>
          <p className={styles.price}>R$ 28,30</p>
          <StaticImage src="../../images/cogumelo.jpeg" alt="Cogumelos grelhados servidos com legumes" />
        </article>
        <article className={styles.item}>
          <h2>Quarta-feira</h2>
          <p>
            Espaguete Integral <br /> 110g
          </p>
          <p className={styles.price}>R$ 33,40</p>
          <StaticImage src="../../images/espaguete.jpeg" alt="Espaguete integral com molho pesto" />
        </article>
        <article className={styles.item}>
          <h2>Quinta-feira</h2>
          <p>
            Moqueca de Banana da Terra <br /> 360g
          </p>
          <p className={styles.price}>R$ 29,50</p>
          <StaticImage src="../../images/moquecaBanana.jpeg" alt="Moqueca de banana da terra com arroz e farofa" />
        </article>
        <article className={styles.item}>
          <h2>Sexta-feira</h2>
          <p>
            Cogumelo Grelhado com Shoyo <br /> 110g
          </p>
          <p className={styles.price}>R$ 37,90</p>
          <StaticImage src="../../images/cogumelo.jpeg" alt="Cogumelo grelhado com shoyo servido com arroz" />
        </article>
        <article className={styles.item}>
          <h2>Sábado</h2>
          <p>
            Feijoada Vegana <br />
            350g
          </p>
          <p className={styles.price}>R$ 36,80</p>
          <StaticImage src="../../images/feijoada-vegana.jpg" alt="Feijoada vegana com arroz e couve" />
        </article>
      </div>
    </section>
  );
};

export default Menu;
