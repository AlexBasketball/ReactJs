import styles from "./CurrencyCalculator.module.css";
const defaultCurrency = ["RUB", "USD", "EUR", "BYN"];

const Block = ({ handleInput, value, currency, handleCurrency }) => {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {defaultCurrency.map((cur) => (
          <li
            onClick={() => handleCurrency(cur)}
            key={cur}
            className={currency === cur ? styles.active : styles.currency}
          >
            {cur}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => handleInput(parseInt(e.target.value, 10))}
        value={value}
        type="number"
        className={styles.input}
        placeholder="Введите сумму"
        min={1}
      />
    </div>
  );
};

export default Block;
