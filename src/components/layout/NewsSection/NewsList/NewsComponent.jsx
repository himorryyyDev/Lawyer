import newsList from "./newsList"
import styles from './NewsList.module.css'

const NewsComponent = () => {
  return (
    <>
      <section className={styles.container__news}>
        {newsList.map((item) => {
          return (
            <div key={item.title} className={styles.news__item}>
              <div className={styles.item__image}>
                <img className={styles.image__item} src={item.image} alt={item.alt} />
                <div className={styles.image__inner}></div>
                <div className={styles.image__hover}>
                  <div className={styles.hover__eye}>
                    <img src="/images/eye.svg" alt="показать" />
                  </div>
                </div>
              </div>
              <div className={styles.item__text}>
                <h1 className={styles.text__title}>{item.title}</h1>
                <p className={styles.text__date}>{item.date}</p>
                <p className={styles.text__description}>{item.description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default NewsComponent