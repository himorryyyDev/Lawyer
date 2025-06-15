import Button from '../../common/ButtonComponent/Button'
import styles from './Services.module.css'
import Line from '../../common/LineComponent/Line'
import ServiceList from './ServiceList Component/ServiceList'

const Services = () => {
  return (
    <>
      <section id='Сервисы' className={styles.main}>
        <h1 className={styles.title__item}>НАШИ УСЛУГИ</h1>
        <Line />
        <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>

        <ServiceList />

        <Button theme='primary' link='#Сервисы'>ВCE УСЛУГИ</Button>
      </section>
    </>
  )
}

export default Services