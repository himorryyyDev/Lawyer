import personList from "./personList"
import styles from './Personal.module.css'
import Line from "../../common/LineComponent/Line"

const Personal = () => {
  return (
    <>
      <section id="Наши-юристы" className={styles.personal__container}>
        <div className={styles.text__container}>
          <h1 className={styles.title__item}>НАШИ ЮРИСТЫ</h1>
          <Line />
          <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
        </div>
        <div className={styles.person__container}>
          {personList.map((person) => {
            return (
              <div className={styles.person__item} key={person.name}>
                <div className={styles.item__preview}>
                  <img className={styles.preview__image} src={person.image} alt="" />
                  <h1 className={styles.person__name}>{person.name}</h1>
                  <p className={styles.person__position}>{person.position}</p>
                </div>
                <div className={styles.item__info}>
                  <div className={styles.info__container}>
                    <div className={styles.person__main}>
                      <h1 className={styles.person__name}>{person.name}</h1>
                      <p className={styles.person__position}>{person.position}</p>
                    </div>
                    <p className={styles.person__description}>{person.description}</p>
                    <p className={styles.person__seniority}>{person.seniority}</p>
                  </div>
                  <div className={styles.inner}></div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Personal