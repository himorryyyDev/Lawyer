import { useRef, useState } from 'react'
import Button from '../../../common/ButtonComponent/Button'
import styles from './NewReviewModal.module.css'

const NewReviewModal = () => {
  const nameRef = useRef(null)
  const companyRef = useRef(null)
  const reviewRef = useRef(null)

  const [preview, setPreview] = useState({
    name: 'Имя',
    company: 'Компания',
    review: 'Текст отзыва'
  })

  const handleInputChange = () => {
    setPreview({
      name: nameRef.current.value || 'Имя не указано',
      company: companyRef.current.value || 'Компания не указана',
      review: reviewRef.current.value || 'Текст отзыва'
    })
  }

  return (
    <>
    <form className={styles.form__container}>
      <input className={styles.container__input} type="text" ref={nameRef} onChange={handleInputChange} placeholder='Введите ваше имя'/>
      <input className={styles.container__input} type="text" ref={companyRef} onChange={handleInputChange} placeholder='Введите вашу компанию'/>
      <textarea className={`${styles.container__input} ${styles.input__wide}`} type="text" ref={reviewRef} onChange={handleInputChange} placeholder='Напишите ваши впечатления'/>
    </form>
    <section className={styles.review__slider}>
      <div className={styles.slider__item}>
        <div className={styles.item__info}>
          <div className={styles.info__person}>
            <div className={styles.person__image}>
              <img className={styles.image__item} src='/images/default-user.jpg' alt="" />
            </div>
            <div className={styles.person__info}>
              <p className={styles.info__company}>{preview.company}</p>
              <h1 className={styles.info__name}>{preview.name}</h1>
            </div>
          </div>
          <img className={styles.info__feather} src="/images/feather.svg" alt="" />
        </div>
        <p className={styles.item__review}>{preview.review}</p>
      </div>
    </section>
    <section className={styles.button__container}>
      <Button theme='primary'>ОТПРАВИТЬ ОТЗЫВ</Button>
    </section>
    </>
  )
}

export default NewReviewModal