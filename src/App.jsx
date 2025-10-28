import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import WorkFlow from './Components/WorkFlow';
 
 const App = () => {
   return (
     <>
     <Navbar />
     <div className='max-w-6xl mx-auto pt-20 px-6'>
     <HeroSection />
     <FeatureSection />
     <WorkFlow />

     </div>
     </>
   )
 }
 
 export default App
 