import styles from "./Result.module.css";

function Result({ correct, questions }) {
  return (
    <div className={styles.congrats}>
      {correct < 1 ? (
        <>
          <img className={styles.img} src="/lose.jpg" alt="Картинка провала" />
          <p className={styles.text}>
            К сожалению, Вы ответили на {correct} вопросов из {questions.length}
          </p>
        </>
      ) : (
        <>
          <img
            className={styles.img}
            src="/congrats.jpg"
            alt="Картинка успеха"
          />
          <p className={styles.text}>
            Поздравляем, Вы ответили на {correct} вопроса из {questions.length}
          </p>
        </>
      )}
      <a className={styles.link} href="/quiz">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

export default Result;
