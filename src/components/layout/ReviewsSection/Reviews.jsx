import { useState } from 'react'
import Button from '../../common/ButtonComponent/Button'
import Line from '../../common/LineComponent/Line'
import styles from './Reviews.module.css'
import ReviewSlider from './ReviewSlider Component/ReviewSlider'
import Modal from '../../common/ModalComponent/Modal'
import ReviewListModal from './ReviewListModalComponent/ReviewListModal'
import NewReviewModal from './NewReviewModalComponent/NewReviewModal'

const Reviews = () => {
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false)
  const [isNewReviewModalOpen, setIsNewReviewModalOpen] = useState(false)

  return (
    <>
      <section id='Отзывы' className={styles.review__container}>
        <div className={styles.container__header}>
          <div className={styles.header__text}>
            <h1 className={styles.text__title}>ЧТО О НАС ГОВОРЯТ КЛИЕНТЫ</h1>
            <Line />
          </div>
          <div className={styles.header__buttons}>
            <button className={styles.button__left}>
              <img src="/images/leftArrow.svg" alt="" />
            </button>
            <img src="/images/Line.svg" alt="" />
            <button className={styles.button__right}>
              <img src="/images/rightArrow.svg" alt="" />
            </button>
          </div>
        </div>

        <ReviewSlider />

        <div className={styles.container__buttons}>
          <Button 
          theme='primary' 
          link='#Отзывы'
          onClick={() => setIsReviewsModalOpen(true)}
          >ВСЕ ОТЗЫВЫ</Button>
          <Button 
          theme='secondary' 
          link='#Отзывы'
          onClick={() => setIsNewReviewModalOpen(true)}
          >НАПИСАТЬ ОТЗЫВ</Button>
        </div>
        <div className={styles.container__image}>
          <img  className={styles.image__item} src="/images/reviewBackground.png" alt="" />
        </div>
      </section>

      <Modal title='ВСЕ ОТЗЫВЫ' isOpen={isReviewsModalOpen} onClose={() => setIsReviewsModalOpen(false)}>
        <ReviewListModal/>
      </Modal>

      <Modal title='НАПИШИТЕ ОТЗЫВ' isOpen={isNewReviewModalOpen} onClose={() => setIsNewReviewModalOpen(false)}>
        <NewReviewModal/>
      </Modal>
    </>
  )
}

export default Reviews