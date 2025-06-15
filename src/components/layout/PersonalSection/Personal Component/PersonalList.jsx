import styles from './PersonalList.module.css'
import personList from '../personList'

const PersonalList = () => {
  return (
    <>
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
    </>
  )
}

export default PersonalList