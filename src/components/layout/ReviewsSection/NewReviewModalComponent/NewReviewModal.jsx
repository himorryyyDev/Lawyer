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
      name: nameRef.current.value || 'Имя',
      company: companyRef.current.value || 'Компания',
      review: reviewRef.current.value || 'Текст отзыва'
    })
  }

  return (
    <>
    <form className={styles.form__container}>
      <input type="text" ref={nameRef} onChange={handleInputChange} placeholder='Введите ваше имя'/>
      <input type="text" ref={companyRef} onChange={handleInputChange} placeholder='Введите вашу компанию'/>
      <textarea type="text" ref={reviewRef} onChange={handleInputChange} placeholder='Напишите ваши впечатления'/>
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
      <Button type='submit' theme='primary'>ОТПРАВИТЬ ОТЗЫВ</Button>
    </section>
    </>
  )
}

export default NewReviewModal