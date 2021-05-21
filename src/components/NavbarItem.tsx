import { ArrowDarkIcon } from './ArrowDarkIcon'

interface Props {
    name: string;
    links: string[];
    index: number | null;
    clicked: number | null;
    closeNav: () => void;
    toggle: () => void;
}

export const NavbarItem = ({ 
    name, 
    links, 
    index, 
    toggle, 
    clicked, 
    closeNav 
}: Props) => {

    return (
        <li className='navbar__item' onClick={toggle}>
            <span className='navbar__option'>
                {name} <ArrowDarkIcon
                    className={ clicked === index ? 'arrowIcon rotate' : 'arrowIcon' }
                    height={12}
                    width={16}
                />
            </span>
                {   
                    clicked === index &&
                    (<ul className="navbar__option-content">
                        {
                            links.map((item, i) => (
                                <li
                                    className="navbar__link"
                                    key={i}
                                    onClick={ closeNav }
                                >
                                    { item}
                                </li>
                            ))
                        }
                    </ul>)
                }
        </li>
    )
}
