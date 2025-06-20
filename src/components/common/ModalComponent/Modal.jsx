import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import Line from '../LineComponent/Line'


const Modal = ({children, onClose, isOpen, title}) => {
  if (!isOpen) return null

  return createPortal(
    <section className={styles.modal__overlay} onClick={onClose}>
      <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container__button}>
          <button className={styles.button__item} onClick={onClose}>
            <img src="/images/Close.svg" alt="закрыть" />
          </button>
        </div>
        <div className={styles.header__container}>
          <h1 className={styles.container__title}>{title}</h1>
          <Line/>
        </div>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </section>,
    document.body
  )
}

export default Modal