import styles from './Footer.module.css'
import Contacts from '../HeroComponent/HeroHeader/Contacts'
import footerNavigation from './footerNavigation'
import Button from '../../common/Button/Button'

const Footer = () => {
  return (
    <>
      <footer id='Контакты' className={styles.footer}>
        <section className={styles.footer__container}>
          <div className={styles.footer__header}>
            <a href='#' className={styles.footer__logo}>
              <h1 className={styles.logo__title}>ПРАВОЗАЩИТНИК</h1>
              <p className={styles.logo__description}>юридическая компания</p>
            </a>
            <p className={styles.header__info}>Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений.</p>
          </div>
          <div className={styles.footer__line}></div>
          <section className={styles.footer__main}>
            <ul className={styles.main__contacts}>
              {Contacts.map((contact) => {
                return (
                  <a key={contact.title} target={contact.target} href={contact.link} className={styles.contact__item}>
                    <div className={styles.image__container}>
                      <img className={styles.contact__image} src={contact.footerImage} alt={contact.alt} />
                    </div>
                    <div className={styles.contact__text}>
                      <p className={styles.contact__description}>{contact.description}</p>
                      <p className={styles.contact__title}>{contact.title}</p>
                    </div>
                  </a>
                )
              })}
            </ul>
            <ul className={styles.main__navigation}>
              {footerNavigation.map((item) => {
                return (
                  <a href={item.link} className={styles.navigation__item}>{item.title}</a>
                )
              })}
            </ul>
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
          </section>
        </section>
        <section className={styles.footer__additional}>
          <div className={styles.additional__container}>
            <p>Все права защищены, 2023</p>
            <a href="#footer">
              <p>Политика обработки персональных данных</p>
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer