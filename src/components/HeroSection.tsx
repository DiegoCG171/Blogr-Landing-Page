import { Button } from "./Button"

export const HeroSection = () => {
    return (
        <header className='hero-section' >
            <div className='hero-section__ilustration wrapper'>
                <div className='hero-section__container' >
                    <div className='hero-section__header-container'>
                        <h1 className='hero-section__header-title' >
                            A modern publishing platform
                        </h1>
                        <p className='hero-section__header-sub-title' >
                            Grow your audience and build your online brand
                        </p>
                    </div>
                    <div className='hero-section__buttons' >
                        <Button title='Start for Free' buttonStyle='primary' />
                        <Button title='Learn More' buttonStyle='outline' />
                    </div>
                </div>
            </div>
        </header>
    )
}
