import { useEffect } from "react";
import s from "./Modal.module.scss";
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (isOpen === false) return null;

  return (
    <div>
      <div className={s.backdrop} onClick={onClose}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <button className={s.closeBtn} onClick={onClose}>
            ✖
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
