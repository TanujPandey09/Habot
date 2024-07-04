import Hero from '../../components/HeroSection'
import { HowItWorks } from '../../components/HowItWorks'
import { ReadyToDive } from '../../components/ReadyToDive'
import SupplierSection from '../../components/SuppliersSection'
import VideoPreview from '../../components/VideoPreview'



function HomePage() {
    return (
      <>
        <Hero />
        <ReadyToDive />
        <VideoPreview />
        <SupplierSection />
        <HowItWorks />
      </>
    );
  }
  
  export default HomePage;