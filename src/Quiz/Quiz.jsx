import style from "./Quiz.module.css";
import { useState } from "react";
import { questions } from "./questions";
import Result from "./Result";

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  const percentage = Math.round((step / questions.length) * 100);

  return (
    <section className={style.quizBlock}>
      {step !== questions.length ? (
        <div className={style.quiz}>
          <div className={style.progressBar}>
            <span
              className={style.progress}
              style={{ width: `${percentage}%` }}
            ></span>
          </div>
          <h3 className={style.title}>{question.title}</h3>
          <ul className={style.questions}>
            {question.variants.map((item, index) => (
              <li
                onClick={() => onClickVariant(index)}
                className={style.answer}
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </section>
  );
}

export default Quiz;
