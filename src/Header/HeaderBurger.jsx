import styles from "./Header.module.css";
import { Link } from "react-router";
const HeaderBurger = ({ isOpen, setIsOpen, showBurgerMenu }) => {
  return (
    <section
      className={`${styles.headerBurgerWrapper} ${
        isOpen ? styles.show : styles.headerBurgerWrapper
      }`}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div
        className={`${styles.burgerModal} ${isOpen ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className={styles.burgerNav}>
          <ul className={styles.burgerList}>
            <li className={styles.burgerItem}>
              <Link
                className={styles.link}
                to="/"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Counter
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link
                className={styles.link}
                to="/modalwindow"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Modal
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link
                className={styles.link}
                to="/quiz"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Quiz
              </Link>
            </li>
            <li className={styles.burgerItem}>
              <Link
                className={styles.link}
                to="/users"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default HeaderBurger;
