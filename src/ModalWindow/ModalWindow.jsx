import { useState } from "react";
import style from "./ModalWindow.module.css";
import { GrClose } from "react-icons/gr";

function ModalWindow() {
  const [open, setOpen] = useState(false);
  const showImage = () => {
    setOpen(true);
  };

  const closeImage = () => {
    setOpen(false);
  };
  return (
    <section className={style.modalWindow}>
      <button onClick={showImage} className={style.btn}>
        Открыть модальное окно
      </button>
      <div
        onClick={closeImage}
        className={`${style.overlay} ${open ? style.show : style.hide}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={style.modal}
        >
          <span onClick={closeImage} className={style.close}>
            <GrClose size={30} />
          </span>
          <img
            className={style.img}
            src="/proger.jpg"
            alt="Фото на берегу моря"
          />
        </div>
      </div>
    </section>
  );
}

export default ModalWindow;
