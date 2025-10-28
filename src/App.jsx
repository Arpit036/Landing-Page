 import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
 
 const App = () => {
   return (
     <>
     <Navbar />
     <div className='max-w-6xl mx-auto pt-20 px-6'>
     <HeroSection />
     <FeatureSection />
     </div>
     </>
   )
 }
 
 export default App
 