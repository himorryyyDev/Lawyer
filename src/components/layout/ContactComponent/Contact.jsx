import styles from './Contact.module.css'
import contacts from './Contacts'

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.contact__container}>
					{contacts.map((contact) => {
						return(
							<a href={contact.link} className={styles.contact__item}>
								<img src={contact.image} alt={contact.alt} />
								<p>{contact.title}</p>
							</a>
						)
					})}
				</div>
				<button className={styles.call}>Заказать звонок</button>
			</div>
		</>
	)
}

export default Contact
