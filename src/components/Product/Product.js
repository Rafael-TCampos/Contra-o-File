import * as React from "react";
import * as styles from "./Product.module.css";
import granola from "../../images/granola.png";
import sopa from "../../images/sopa.png"


const Product = ()=> {
  return (
    <section className={styles.productSection}>
      <h1 className={styles.mainTitle}>Produtos locais e orgânicos</h1>

      <div className={styles.productContainer}>
      
        <div className={styles.textContainer}>
        <span className={styles.subtitle}>Sobremesas</span>
        <h2 className={styles.Text}>Yogurte grego com <br />sementes e morangos</h2>
        <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Voluptas veniam excepturi 
          voluptatum vitae saepe corporis!
          
        </p>
        <span className={styles.price}>R$ 23,90</span>
        </div>
        <div className={styles.imgContainer}>
          <img src={granola} alt="Foto sobremesa" className={styles.imgPhoto} />
        </div>
      </div>

      <div className={`${styles.productContainer} ${styles.reverseLayout}`} >
        <div className={styles.textContainer}>
          <span className={styles.subtitle}>Almoço</span>
          <h2>Sopa de amendoim com grão de bico</h2>
          <p className={styles.description}>
            Este é um simples texto de preenchimento, utilizado para mostrar a aparência do layout quando este estiver completo.
          </p>
          <span className={styles.price}>R$ 19,90</span>
        </div>
        <div className={styles.imgContainer}>
          <img src={sopa} alt="Foto almoço" className={styles.imgPhoto} />
        </div>
      </div>
    </section>
  )
}

export default Product;