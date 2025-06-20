import Button from '../../common/ButtonComponent/Button'
import styles from './Services.module.css'
import Line from '../../common/LineComponent/Line'
import ServiceList from './ServiceList Component/ServiceList'
import { useState } from 'react'
import Modal from '../../common/ModalComponent/Modal'
import ServicesModalContent from './ServiceModalComponent/ServiceModalContent'

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='Сервисы' className={styles.main}>
        <h1 className={styles.title__item}>НАШИ УСЛУГИ</h1>
        <Line />
        <p className={styles.description__item}>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона</p>

        <ServiceList />

        <Button 
        theme='primary' 
        link='#Сервисы'
        onClick={() => setIsModalOpen(true)}
        >ВCE УСЛУГИ</Button>
      </section>

      <Modal title='ВСЕ УСЛУГИ' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ServicesModalContent onClose={() => setIsModalOpen(false)}/>
      </Modal>
    </>
  )
}

export default Services