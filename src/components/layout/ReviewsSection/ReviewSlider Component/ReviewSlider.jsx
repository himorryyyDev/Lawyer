import reviewList from "./ReviewList"
import styles from './ReviewSlider.module.css'
import defaultAvatar from '/images/default-user.jpg'

const ReviewSlider = () => {
  const handeImageError = (e) => {
    e.target.src = defaultAvatar
  }

  return (
    <>
      <section className={styles.review__slider}>
        {reviewList.slice(0, 2).map((review) => {
          return (
            <div key={review.name} className={styles.slider__item}>
              <div className={styles.item__info}>
                <div className={styles.info__person}>
                  <div className={styles.person__image}>
                    <img className={styles.image__item} src={review.image || defaultAvatar} onError={handeImageError} alt="" />
                  </div>
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