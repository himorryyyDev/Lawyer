import personList from "./personList"
import styles from './Personal.module.css'

const Personal = () => {
  return (
    <>
      <section className={styles.personal__container}>
        <div className={styles.text__container}>
          <h1 className={styles.title__item}>НАШИ ЮРИСТЫ</h1>
          <div className={styles.line__item}></div>
          <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>
        </div>
        <div className={styles.person__container}>
          {personList.map((person) => {
            return (
              <div className={styles.person__item}>
                <div className={styles.item__preview}>
                  <img className={styles.preview__image} src={person.image} alt="" />
                  <h1 className={styles.person__name}>{person.name}</h1>
                  <p className={styles.person__position}>{person.position}</p>
                </div>
                <div className={styles.item__info}></div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Personal