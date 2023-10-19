import Link from 'next/link';
import { navigationLinks } from '../../utils/data';
import style from './Navbar.module.css';
import { useState } from 'react';
import Image from 'next/image';
import close from '../../src/icons/close.png';

export const Navbar = () => {

    const [menuToggle, setMenuToggle] = useState(`${style.menu_toggle}`);
    const [menuMobile, setMenuMobile] = useState(`${style.menu_mobile_none}`);

    const handleClickToggle = () => {
        setMenuToggle(`${style.menu_toggle_none}`);
        setMenuMobile(`${style.menu_mobile}`);
    }

    const handleCloseMenu = () => {
        setMenuMobile(`${style.menu_mobile_none}`);
        setMenuToggle(`${style.menu_toggle}`);
    }

    return (
        <>

            <div className={menuToggle} onClick={handleClickToggle}>
                <div className="menu-toggle">&#9776;</div>
            </div>

            <div className={menuMobile}>
                <ul>
                    {navigationLinks.map((link, index) => (
                        <div key={index}>
                            <li>
                                <Link href={link.path[0]}>{link.lable}</Link>
                            </li>
                        </div>
                    ))}

                </ul>

                <button className={style.close} onClick={handleCloseMenu}><Image src={close} alt='Botão fechar menu' /></button>
            </div>
            <ul className={style.container}>
                {navigationLinks.map((link, index) => (
                    <div key={index}>
                        <li>
                            <Link href={link.path[0]}>{link.lable}</Link>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    )
}