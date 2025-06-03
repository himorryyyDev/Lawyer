import contactData from './contactData'
import styles from './Contact.module.css'

const Contact = () => {
	return (
		<>
			<a href={contactData.link} className={styles.link}>
				<img src={contactData.image} alt='' className={styles.img} />
				<p className={styles.text}>{contactData.title}</p>
			</a>
		</>
	)
}

export default Contact
