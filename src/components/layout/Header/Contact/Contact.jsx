import contactData from './contactData'

const Contact = () => {
	return (
		<>
			<a href={contactData.link}>
				<img src={contactData.image} alt='' />
				<p>{contactData.title}</p>
			</a>
		</>
	)
}

export default Contact
