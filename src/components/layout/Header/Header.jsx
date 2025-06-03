import styles from './Header.module.css'

const Header = () => {
	return (
		<>
			<header>
				<section className={styles.top__container}>
					<div className='w-1000px flex items-center'>
						<a href='tel: +79220229482' className='social__link'>
							<img src='/images/phone.svg' alt='Телефон' />
							<p>{'+7 (922) 022-94-82'}</p>
						</a>
					</div>
				</section>
			</header>
		</>
	)
}

export default Header
