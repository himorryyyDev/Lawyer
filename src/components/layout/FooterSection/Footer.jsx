import styles from './Footer.module.css'
import Person from './FooterPerson/Person'
import Navigation from './FooterNavigation/Navigation'
import FooterContacts from './FooterContacts/FooterContacts'
import Logo from '../../common/LogoComponent/Logo'

const Footer = () => {
  return (
    <>
      <footer id='Контакты' className={styles.footer}>
        <section className={styles.footer__container}>
          <div className={styles.footer__header}>
            <Logo/>
            <p className={styles.header__info}>Предварительные выводы неутешительны: синтетическое тестирование, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экономической целесообразности принимаемых решений.</p>
          </div>
          <div className={styles.footer__line}></div>
          <section className={styles.footer__main}>
            <FooterContacts />
            <Navigation />
            <Person />
          </section>
        </section>
        <section className={styles.footer__additional}>
          <div className={styles.additional__container}>
            <p>Все права защищены, 2025</p>
            <a href="#Контакты">
              <p>Политика обработки персональных данных</p>
            </a>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer