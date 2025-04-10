import styles from "./Users.module.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const User = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
  isInvited,
  handleInvite,
}) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar}></img>
      <ul className={styles.list}>
        <li className={styles.name}>
          {first_name} {last_name}
        </li>
        <li className={styles.email}>{email}</li>
      </ul>
      {isInvited ? (
        <CiCircleMinus
          size={30}
          className={styles.plus}
          onClick={() => handleInvite(id)}
        />
      ) : (
        <CiCirclePlus
          size={30}
          className={styles.plus}
          onClick={() => handleInvite(id)}
        />
      )}
    </div>
  );
};

export default User;
