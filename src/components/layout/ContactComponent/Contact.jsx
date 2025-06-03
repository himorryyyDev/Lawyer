import styles from './Contact.module.css'

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.contact__container}>
					<a href="tel: +79220229482">
						<img src="/images/phone.svg" alt="call" />
						<p>{'+7 (922) 022-94-82'}</p>
					</a>
					<a href="mailto: janis62@yahoo.com">
						<img src="/images/mail.svg" alt="mail" />
						<p>{'janis62@yahoo.com'}</p>
					</a>
				</div>
				<button className={styles.call}>Заказать звонок</button>
			</div>
		</>
	)
}

export default Contact
