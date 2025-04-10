import { useRef, useState } from "react";
import style from "./Counter.module.css";

function Counter({ showBurgerMenu }) {
  const [count, setCount] = useState(0);

  const minusCount = () => {
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };
  return (
    <section className={style.counter}>
      <div className={style.block}>
        <h1 className={style.heading}>{count}</h1>
        <ul className={style.btns}>
          <li>
            <button onClick={minusCount}>-1</button>
          </li>
          <li>
            <button onClick={plusCount}>+1</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Counter;
