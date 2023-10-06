import Link from 'next/link';
import { navigationLinks } from '../../utils/data';
import style from './Navbar.module.css';

export const Navbar = () =>{
    return(
        <>
            <ul className={style.container}>
                {navigationLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path[0]}>{link.lable}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}