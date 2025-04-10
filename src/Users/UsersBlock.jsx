import { useEffect, useState } from "react";
import styles from "./Users.module.css";
import Skeleton from "./Skeleton";
import User from "./User";
import Success from "./Success";
import { IoIosSearch } from "react-icons/io";

const UsersBlock = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [invite, setInvite] = useState([]);
  const [success, setSuccess] = useState(false);

  async function getData() {
    const res = await fetch("https://reqres.in/api/users");
    try {
      const item = await res.json();
      const data = await item.data;
      return setUsers(data);
    } catch (err) {
      console.log(err);
      alert("Ошибка при получении пользоваеля");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleInvite = (id) => {
    if (invite.includes(id)) {
      setInvite((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvite((prev) => [...prev, id]);
    }
  };

  const handleSend = () => {
    setSuccess(true);
  };

  return (
    <section className={styles.wrapper}>
      {success ? (
        <Success count={invite.length} />
      ) : (
        <div className={styles.block}>
          <div className={styles.search}>
            <IoIosSearch size={30} className={styles.icon} />
            <input
              onChange={handleInput}
              value={search}
              type="text"
              placeholder="Найти пользователя"
              className={styles.text}
            />
          </div>
          <div className={styles.users}>
            {isLoading ? (
              <ul>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </ul>
            ) : (
              <ul className={styles.usersList}>
                {users
                  .filter((obj) => {
                    const fullname = (
                      obj.first_name + obj.last_name
                    ).toLowerCase();
                    return (
                      fullname.includes(search.toLowerCase()) ||
                      obj.email.toLowerCase().includes(search.toLowerCase())
                    );
                  })
                  .map((obj) => (
                    <li key={obj.id} className={styles.user}>
                      <User
                        {...obj}
                        handleInvite={handleInvite}
                        isInvited={invite.includes(obj.id)}
                      />
                    </li>
                  ))}
              </ul>
            )}
            <button onClick={handleSend} className={styles.send}>
              Отправить приглашение
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default UsersBlock;
