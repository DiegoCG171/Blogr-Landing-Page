import { LogoBlogr } from "./LogoBlogr";
import { dataFooter } from '../data/dataFooter';

export const Footer = () => {
    return (
        <footer className='wrapper footer' >
            <LogoBlogr />
            {
                dataFooter.map( (footer, index) => {
                    return  (<ul key={index} className='footer__column'>
                                <p className='footer__title' >{footer.title}</p>
                                {
                                    footer.links.map( (link, i) => {
                                        return (<li key={i} className='footer__link' >{link}</li> )
                                    })
                                }
                                </ul>
                            )
                })
            }
        </footer>
    )
}
