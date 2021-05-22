import { useState } from 'react';
import { InfoData } from '../data/dataSection'

interface Props extends InfoData { }


export const InfoSection = ({
    title,
    imgDesktop,
    imgMobile,
    imgDirection,
    alt,
    articles
}: Props) => {

    const [screenWidth] = useState<number>(window.innerWidth)


    return (
        <section className='Info-section wrapper'>
            {
                title && <h2 className='Info-section__title' >{title}</h2> 
            }
            <div className='Info-section__container' style={ (screenWidth >= 960 && imgDirection !== 'rigth' ) ? { flexDirection: 'row-reverse' } : {}} >
                <img
                    className={ `Info-section__ilustration ${ imgDirection === 'rigth' ? 'img-rigth' : 'img-left' }` }
                    src={ screenWidth <= 960 ? imgMobile : imgDesktop }
                    alt={alt} />
                <div className='Info-section__articles'>
                    {
                        articles.map( (article, index) => {
                            return (
                                <article key={ index } className='Info-section__column' >
                                    <h3 className='Info-section__title' >{article.title}</h3>
                                    <p className='Info-section__paragraph' >{article.desc}</p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
