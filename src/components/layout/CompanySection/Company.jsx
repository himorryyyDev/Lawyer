import { useState } from 'react'
import Button from '../../common/ButtonComponent/Button'
import Line from '../../common/LineComponent/Line'
import styles from './Company.module.css'
import Modal from '../../common/ModalComponent/Modal'
import CompanyModal from './CompanyModalComponent/CompanyModal'
import CertificateModal from './CertifaicateModalComponent/CertificateModal'

const Company = () => {
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false)
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false)

  return (
    <>
      <section id='О-компании' className={styles.main}>
        <section className={styles.main__container}>
          <div className={styles.information__container}>
            <div className={styles.text__block}>
              <h1 className={styles.title__text}>ЮРИДИЧЕСКАЯ КОМПАНИЯ <b className={styles.color__text}>ПРАВОЗАЩИТНИК</b></h1>
              <Line />
              <div className={styles.description__block}>
                <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение.</p>
                <br />
                <p>Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.</p>
                <br />
                <p>За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).</p>
              </div>
            </div>
            <div className={styles.image__block}>
              <img src="/images/books.png" alt="" />
            </div>
          </div>
          <section className={styles.button__container}>
            <Button 
            theme='primary' 
            link='#О-компании'
            onClick={() => setIsCompanyModalOpen(true)}
            >ИСТОРИЯ КОМПАНИИ</Button>
            <Button 
            theme='secondary' 
            link='#О-компании'
            onClick={() => setIsCertificateModalOpen(true)}
            >СЕРТИФИКАТЫ</Button>
          </section>
        </section>
      </section>

      <Modal title='ИСТОРИЯ КОМПАНИИ' isOpen={isCompanyModalOpen} onClose={() => setIsCompanyModalOpen(false)}>
        <CompanyModal onClose={() => setIsCompanyModalOpen(false)}/>
      </Modal>

      <Modal title='СЕРТИФИКАТЫ' isOpen={isCertificateModalOpen} onClose={() => setIsCertificateModalOpen(false)}>
        <CertificateModal onClose={() => setIsCertificateModalOpen(false)}/>
      </Modal>
    </>
  )
}

export default Company