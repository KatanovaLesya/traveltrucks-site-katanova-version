import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link to="/" className={styles.logoLink}>
          <Logo />
        </Link>

        {/* Навігація */}
        <nav aria-label="Main navigation" className={styles.menu}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
