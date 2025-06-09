import './App.css'
import Company from './components/layout/CompanySection/Company'
import Hero from './components/layout/HeroComponent/Hero'
import Personal from './components/layout/PersonalSection/Personal'
import Services from './components/layout/ServicesSection/Services'

function App() {
	return (
		<>
			<Hero />
			<Services />
			<Company />
			<Personal />
		</>
	)
}

export default App
