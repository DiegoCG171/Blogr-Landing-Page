import { useState } from "react";
import { LogoBlogr } from "./LogoBlogr";
import { HamburgerIcon } from './HamburgerIcon';
import { CloseIcon } from './CloseIcon'
import { Button } from "./Button";
import { NavbarItem } from './NavbarItem';
import { dataNavbar } from '../data/dataNavbar'

export const Navbar = () => {

    const [menuClick, setMenuClick] = useState<boolean>(false);
    const [clickedNavItem, setClickedNavItem] = useState<number | null>(null);

    const handleToggleNavItem = (indexItem: number | null) => {
        (clickedNavItem === indexItem)
            ? setClickedNavItem(null)
            : setClickedNavItem(indexItem);
    }

    const handleToggleClick = () => setMenuClick(!menuClick);
    const handleCloseNav = () => setMenuClick(false);


    return (
        <nav className='navbar' >
            <div className="navbar__container">
                <div className="navbar__logo">
                    <LogoBlogr height={40} width={72} />
                </div>
                <div className="menu-icon" onClick={handleToggleClick} >
                    {!menuClick ? <HamburgerIcon height={40} width={35} /> : <CloseIcon height={28} width={28} />}
                </div>
                <div className={menuClick ? "navbar__menu" : "navbar__menu disable"}>
                    <ul className='navbar__menu-container' >
                        {
                            dataNavbar.map( (item, index) => {
                                return <NavbarItem 
                                            key={index}
                                            name={item.name}
                                            links={item.link}
                                            index={index}
                                            closeNav={ handleCloseNav }
                                            clicked ={ clickedNavItem }
                                            toggle ={ () => handleToggleNavItem(index) }
                                        />
                            })
                        }
                    </ul>
                    <ul className='navbar__menu-container' >
                        <li className='navbar__item' >
                            <span className='navbar__option'>Login</span>
                        </li>
                        <li className='navbar__item' >
                            <Button title='Sing Up' buttonStyle='gradient' />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
