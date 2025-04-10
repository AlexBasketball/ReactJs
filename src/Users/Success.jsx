import { BsFillCheckCircleFill } from "react-icons/bs";
import styles from "./Users.module.css";

const Success = ({ count }) => {
  return (
    <div className={styles.block}>
      <ul className={styles.successList}>
        <li>
          <BsFillCheckCircleFill className={styles.done} size={70} />
        </li>
        <li>
          <h3 className={styles.capture}>
            Приглашение отправленно {count} пользователям
          </h3>
        </li>
        <li>
          <a href="/users">
            <button>Отправить другим пользователям</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Success;
