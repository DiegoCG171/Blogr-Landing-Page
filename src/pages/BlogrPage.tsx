import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection'
import { dataSection } from '../data/dataSection';
import { Footer } from '../components/Footer';
import { MidSection } from '../components/MidSection';



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
            <MidSection />
            <InfoSection 
                {
                    ...dataSection[1]
                }
            />
            <Footer />
        </div>
    )
}
