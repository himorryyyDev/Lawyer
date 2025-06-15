import './App.css'
import Company from './components/layout/CompanySection/Company'
import Footer from './components/layout/FooterSection/Footer'
import Hero from './components/layout/HeroComponent/Hero'
import News from './components/layout/NewsSection/News'
import Personal from './components/layout/PersonalSection/Personal'
import Reviews from './components/layout/ReviewsSection/Reviews'
import Services from './components/layout/ServicesSection/Services'

function App() {
	return (
		<>
			<Hero />
			<Services />
			<Company />
			<Personal />
			<Reviews />
			<News />

			<Footer />
		</>
	)
}

export default App
