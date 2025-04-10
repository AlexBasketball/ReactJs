import { useEffect, useState } from "react";
import Block from "./Block";
import styles from "./CurrencyCalculator.module.css";

const CurrencyCalculator = () => {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [rates, setRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");

  async function getFakeCurrency() {
    const res = await fetch("https://www.cbr-xml-daily.ru/latest.js");
    try {
      const data = await res.json();
      const item = await data.rates;
      console.log(item);
      return setRates({ ...item, RUB: 1 });
    } catch (err) {
      console.log("Нет данных о валютном рынке");
    }
  }

  useEffect(() => {
    getFakeCurrency();
  }, []);

  const onChangeFromValue = (value) => {
    const price = value / rates[fromCurrency];
    const result = (price * rates[toCurrency]).toFixed(2);
    console.log(fromValue);
    setToValue(result);
    setFromValue(value);
  };

  const onChangeToValue = (value) => {
    const price = value / rates[toCurrency];
    const result = (price * rates[fromCurrency]).toFixed(2);
    setToValue(value);
    setFromValue(result);
    console.log(value);
  };

  useEffect(() => {
    onChangeFromValue(fromValue);
  }, [fromCurrency, fromValue]);

  useEffect(() => {
    onChangeToValue(toValue);
  }, [toCurrency, toValue]);

  return (
    <div className={styles.wrapper}>
      <Block
        value={fromValue}
        currency={fromCurrency}
        handleCurrency={setFromCurrency}
        handleInput={onChangeFromValue}
      />
      <Block
        value={toValue}
        currency={toCurrency}
        handleCurrency={setToCurrency}
        handleInput={onChangeToValue}
      />
    </div>
  );
};

export default CurrencyCalculator;
