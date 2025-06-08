import Button from '../../common/Button/Button'
import styles from './Services.module.css'
import servicesList from './servicesList' 

const Services = () => {
  return (
    <>
      <section id='Сервисы' className={styles.main}>
        <h1 className={styles.title__item}>Наши услуги</h1>
        <div className={styles.line__item}></div>
        <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>

        <div className={styles.services__container}>
          {servicesList.slice(0, 6).map((item) => {
            return (
              <div key={item.title} className={styles.services__item}>
                <img src='/images/Services.svg' alt="" className={styles.services__image}/>
                <div className={styles.services__text}>
                  <h1 className={styles.services__title}>{item.title}</h1>
                  <p className={styles.services__description}>{item.description}</p>
                  <div className={styles.inner}></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.shadow__container}>
          <div className={styles.inset__shadow}></div>
        </div>

        <Button theme='primary' link='#Сервисы'>Все услуги</Button>
      </section>
    </>
  )
}

export default Services