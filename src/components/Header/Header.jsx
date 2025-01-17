import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Доданий атрибут aria-label */}
      <nav aria-label="Main navigation">
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/catalog" className={styles.navLink}>Catalog</Link>
      </nav>
    </header>
  );
};

export default Header;
