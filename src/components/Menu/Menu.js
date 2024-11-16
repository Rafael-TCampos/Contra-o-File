import * as React from "react";
import * as styles from "./Menu.module.css";
import pene from "../../images/pene.jpeg";
import cogumelo from "../../images/cogumelo.jpeg";
import espaguete from "../../images/espaguete.jpeg";
import moquecaBanana from "../../images/moquecaBanana.jpeg";
import cogumeloGrelhado from "../../images/cogumelo.jpeg";
import feijoada from "../../images/feijoada-vegana.jpg";

const Menu = () => {
  return (
    <section className={styles.menu} id="cardapio">
      <h1 className={styles.title}>Cardápio</h1>
      <p className={styles.text}>Veganismo</p>
      <div className={styles.grid}>
        <div className={styles.item}>
          <h2>Segunda-feira</h2>
          <p>
            Moqueca de Palmito <br /> 400g
          </p>
          <p className={styles.price}>R$ 23,50</p>
          <img src={pene} alt="foto pene" />
        </div>
        <div className={styles.item}>
          <h2>Terça-feira</h2>
          <p>
            Cogumelos Grelhados <br /> 400g
          </p>
          <p className={styles.price}>R$ 28,30</p>
          <img src={cogumelo} alt="foto cogumelo" />
        </div>
        <div className={styles.item}>
          <h2>Quarta-feira</h2>
          <p>
            Espaguete Integral <br /> 110g
          </p>
          <p className={styles.price}>R$ 33,40</p>
          <img src={espaguete} alt="foto espaguete" />
        </div>
        <div className={styles.item}>
          <h2>Quinta-feira</h2>
          <p>
            Moqueca de Banana da Terra <br /> 360g
          </p>
          <p className={styles.price}>R$ 29,50</p>
          <img src={moquecaBanana} alt="foto moqueca banana" />
        </div>
        <div className={styles.item}>
          <h2>Sexta-feira</h2>
          <p>
            Cogumelo Grelhado com Shoyo <br /> 110g
          </p>
          <p className={styles.price}>R$ 37,90</p>
          <img src={cogumeloGrelhado} alt="foto cogumelo grelhado" />
        </div>
        <div className={styles.item}>
          <h2>Sábado</h2>
          <p>
            Feijoada Vegana <br />
            350g
          </p>
          <p className={styles.price}>R$ 36,80</p>
          <img src={feijoada} alt="foto feijoada vegana" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
