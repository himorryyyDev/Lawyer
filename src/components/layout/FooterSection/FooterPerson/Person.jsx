import Button from "../../../common/Button/Button"
import styles from './Person.module.css'

const Person = () => {
  return (
    <>
      <div className={styles.main__person}>
        <div className={styles.person__preview}>
          <img className={styles.preview__photo} src="/images/Alex.png" alt="Миронов Александр" />
          <div className={styles.preview__info}>
            <h1 className={styles.info__name}>Миронов Александр</h1>
            <p className={styles.info__position}>Ведущий юрист</p>
          </div>
        </div>
        <p className={styles.person__phrase}>Есть над чем задуматься: тщательные исследования конкурентов разоблачены. Идейные соображения высшего порядка, а также перспективное планирование играет </p>
        <Button theme='primary'>ЗАДАТЬ ВОПРОС ЮРИСТУ</Button>
      </div>
    </>
  )
}

export default Person