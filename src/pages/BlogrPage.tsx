import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection'
import { dataSection } from '../data/dataSection';



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
        </div>
    )
}
