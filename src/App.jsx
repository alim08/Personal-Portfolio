
import LogoSection from './sections/LogoSection.jsx'
import Navbar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowicaseSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import Experience from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection/>
        
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Contact />
        <Footer />
    </>
  )
}

export default App
