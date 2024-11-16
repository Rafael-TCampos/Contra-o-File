import * as React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo-contra-file.png";
import menuIcon from "../../images/icons8-menu-50.png";
import closeIcon from "../../images/icons8-close-window-50.png";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="logo do site" className={styles.logoImage} />
        </Link>
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? closeIcon : menuIcon}
      >
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt={isOpen ? "Fechar menu" : "Abrir menu"}
        />
      </button>

      <ul className={`${styles.navList} ${isOpen && styles.open}`}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="#cardapio"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Cardápio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="#contato"
            className={styles.navLink}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
