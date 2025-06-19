import styles from './ServiceList.module.css'
import servicesList from './servicesList'

const ServiceList = () => {
  return (
    <>
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
    </>
  )
}

export default ServiceList