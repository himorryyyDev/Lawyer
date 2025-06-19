import react, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({children, onClose, isOpen}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Блокировка скролла
    const html = document.documentElement;
    const scrollY = window.scrollY;
    html.style.position = 'fixed';
    html.style.top = `-${scrollY}px`;
    html.style.width = '100%';
    html.style.overflow = 'hidden';

    // Закрытие по ESC
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);

    return () => {
      // Восстановление скролла
      const html = document.documentElement;
      const scrollY = parseInt(html.style.top || '0');
      html.style.position = '';
      html.style.top = '';
      html.style.width = '';
      html.style.overflow = '';
      window.scrollTo(0, -scrollY);

      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <section className={styles.modal__overlay} onClick={onClose}>
      <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container__header}>
          <button className={styles.header__button} onClick={onClose}>
            <img src="/images/Close.svg" alt="закрыть" />
          </button>
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </section>,
    document.body
  )
}

export default Modal