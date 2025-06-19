import styles from './ServiceModalContent.module.css'
import servicesList from '../servicesList';
import Line from '../../../common/LineComponent/Line';

const ServiceModalContent = () => {
  return (
    <>
      <div className={styles.text__container}>
        <h1 className={styles.container__title}>ВСЕ УСЛУГИ</h1>
        <Line/>
      </div>
      <div className={styles.services__container}>
        {servicesList.map((item) => {
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
    </>
  );
};

export default ServiceModalContent;