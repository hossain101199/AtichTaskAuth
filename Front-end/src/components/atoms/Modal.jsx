import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Add a CSS class to the body element to disable background events
      document.body.classList.add("modal-open");
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      // Remove the CSS class from the body element when the modal is closed
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
