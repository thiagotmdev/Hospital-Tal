import style from './Cabecalho.module.css';
import { Navbar } from '../Navbar';
import Image from 'next/image';
import logo from '../../src/images/hopistal_logo.png';
import Link from 'next/link';

export const Cabecalho = () => {
    return (
            <div className={style.container}>
                <Link href='/' className={style.link_logo}><Image src={logo} alt='hospital logo' className={style.logo} /><span className={style.name_h}>Hospital Tal</span></Link>
                <Navbar />
            </div>
    )
}