import react, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({children, onClose, isOpen}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

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