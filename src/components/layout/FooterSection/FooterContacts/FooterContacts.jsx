import styles from './FooterContacts.module.css'
import Contacts from '../../HeroComponent/HeroHeader/Contacts'

const FooterContacts = () => {
  return (
    <>
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
    </>
    
  )
}

export default FooterContacts