import styles from './Header.module.css'
import Contact from './ContactComponent/Contact'
import contactData from './ContactComponent/contactData'

const Header = () => {
	return (
		<>
			<header>
				<section className={styles.top__container}>
					<div className={styles.container__items}>
						<div>
							{contactData.map(contactData => {
								<Contact
									key={contactData.id}
									link={contactData.link}
									image={contactData.image}
									title={contactData.title}
								/>
							})}
						</div>
					</div>
				</section>
			</header>
		</>
	)
}

export default Header
