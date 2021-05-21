import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection'
import { dataSection } from '../data/dataSection';
import { Footer } from '../components/Footer';



export const BlogrPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <InfoSection 
                {
                    ...dataSection[0]
                }
            />
            <InfoSection 
                {
                    ...dataSection[1]
                }
            />
            <Footer />
        </div>
    )
}
