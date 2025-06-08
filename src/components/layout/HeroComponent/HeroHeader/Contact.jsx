import styles from './Contact.module.css'
import contacts from './Contacts'

const Contact = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__container}>
					<div className={styles.contact__container}>
						{contacts.map((contact) => {
							return(
								<a key={contact.title} href={contact.link} className={styles.contact__item}>
									<img src={contact.image} alt={contact.alt} />
									<p>{contact.title}</p>
								</a>
							)
						})}
					</div>
					<button className={styles.call}>Заказать звонок</button>
				</div>
			</header>
		</>
	)
}

export default Contact
