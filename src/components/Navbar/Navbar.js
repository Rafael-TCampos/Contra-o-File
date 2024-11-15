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
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="logo do site" className={styles.logoImage} />
        </Link>
      </div>
      <img
        className={styles.menuBtn}
        src={isOpen ? closeIcon : menuIcon}
        alt="menu-button"
        onClick={() => setIsOpen(!isOpen)}
      />

      <ul
        className={`${styles.navList} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(false)}
      >
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="#cardapio" className={styles.navLink}>
            Cardápio
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contato" className={styles.navLink}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
