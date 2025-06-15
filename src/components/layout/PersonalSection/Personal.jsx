import styles from './Personal.module.css'
import Line from "../../common/LineComponent/Line"
import PersonalList from "./Personal Component/PersonalList"

const Personal = () => {
  return (
    <>
      <section id="Наши-юристы" className={styles.personal__container}>
        <div className={styles.text__container}>
          <h1 className={styles.title__item}>НАШИ ЮРИСТЫ</h1>
          <Line />
          <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
        </div>
        <PersonalList />
      </section>
    </>
  )
}

export default Personal