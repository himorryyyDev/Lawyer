import Button from '../../common/ButtonComponent/Button'
import Line from '../../common/LineComponent/Line'
import styles from './News.module.css'
import NewsComponent from './NewsList/NewsComponent'

const News = () => {
  return (
    <>
      <section id='Полезные-материалы' className={styles.news__container}>
        <section className={styles.container__info}>
          <h1 className={styles.info__title}>ПОЛЕЗНЫЕ МАТЕРИАЛЫ</h1>
          <Line />
          <p className={styles.info__description}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
        </section>
        <NewsComponent />
        <Button theme='primary' link='#Полезные-материалы'>ВСЕ НОВОСТИ</Button>
      </section>
    </>
  )
}

export default News