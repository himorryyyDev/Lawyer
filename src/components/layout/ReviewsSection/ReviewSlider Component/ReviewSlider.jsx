import reviewList from "./ReviewList"
import styles from './ReviewSlider.module.css'

const ReviewSlider = () => {
  return (
    <>
      <section className={styles.review__slider}>
        {reviewList.map((review) => {
          return (
            <div key={review.name} className={styles.slider__item}>
              <div className={styles.item__info}>
                <div className={styles.info__person}>
                  <img className={styles.person__image} src={review.image} alt="" />
                  <div className={styles.person__info}>
                    <p className={styles.info__company}>{review.company}</p>
                    <h1 className={styles.info__name}>{review.name}</h1>
                  </div>
                </div>
                <img className={styles.info__feather} src="/images/feather.svg" alt="" />
              </div>
              <p className={styles.item__review}>{review.text}</p>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default ReviewSlider