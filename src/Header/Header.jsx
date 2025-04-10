import { Routes, Route, Link } from "react-router";
import HeaderBurger from "./HeaderBurger";
import Counter from "../Counter/Counter";
import ModalWindow from "../ModalWindow/ModalWindow";
import Quiz from "../Quiz/Quiz";
import UsersBlock from "../Users/UsersBlock";
import CurrencyCalculator from "../Calculator/CurrencyCalculator";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <HeaderBurger isOpen={isOpen} setIsOpen={setIsOpen} />
        <button onClick={showBurgerMenu} className={styles.burgerBtn}>
          <span
            className={`${styles.burgerStick} ${
              isOpen ? styles.topStickTransform : styles.burgerStick
            }`}
          ></span>
          <span
            className={`${styles.burgerStick} ${
              isOpen ? styles.middleStickTransform : styles.burgerStick
            }`}
          ></span>
          <span
            className={`${styles.burgerStick} ${
              isOpen ? styles.bottomStickTransform : styles.burgerStick
            }`}
          ></span>
        </button>

        <nav className={styles.nav}>
          <Link className={styles.link} to="/">
            Counter
          </Link>
          <Link className={styles.link} to="/modalwindow">
            Modal
          </Link>
          <Link className={styles.link} to="/quiz">
            Quiz
          </Link>
          <Link className={styles.link} to="/users">
            Users
          </Link>
          <Link className={styles.link} to="/currencycalculator">
            Currency
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/modalwindow" element={<ModalWindow />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/users" element={<UsersBlock />} />
        <Route path="/currencycalculator" element={<CurrencyCalculator />} />
      </Routes>
    </>
  );
};

export default Header;
