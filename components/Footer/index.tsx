import style from './Footer.module.css';
import { navigationLinks } from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../src/images/hopistal_logo.png';
import face from '../../src/icons/facebook.svg';
import insta from '../../src/icons/instagram.svg';
import linkedin from '../../src/icons/linkedin.svg';
import youtube from '../../src/icons/youtube.svg';
import brasil from '../../src/images/brasil.png';
import eua from '../../src/images/eua.png';
import reino_unido from '../../src/images/reino-unido.png';
import espanha from '../../src/images/espanha.png';

export const Footer = () => {
    return (
            <div className={style.footer}>
                <div className={style.footer_int_1}>
                    <div className={style.footer_logo}>
                        <Link href={'/'}><Image src={logo} alt='Logo do hospital tal' /></Link>
                        <Link href={'/'}>Hospital Tal</Link>
                    </div>

                    <div className={style.social_medias}>
                        <Link href={'/'}><Image src={face} alt='Facebook' /></Link>
                        <Link href={'/'}><Image src={insta} alt='Instagram' /></Link>
                        <Link href={'/'}><Image src={linkedin} alt='Linkedin' /></Link>
                        <Link href={'/'}><Image src={youtube} alt='Youtube' /></Link>
                    </div>
                </div>
                <hr />
                <div className={style.footer_int_2}>
                    <div className={style.footer_int_2_bloc}>
                        <h3 className={style.medicpoket}>MediPocket</h3>
                        MediPocket é uma plataforma de atendimento transfronteiriço dos EUA que preenche a lacuna no atendimento especializado, conectando pacientes de todo o mundo, de suas casas, aos melhores hospitais e especialistas dos EUA.
                    </div>

                    <div className={style.footer_int_2_bloc}>
                        <h3 className={style.link}>Links</h3>
                        {navigationLinks.map((link, index) => (
                            
                                <Link className={style.footer_link} key={index} href={link.path[0]}>{link.lable}</Link>
                            
                        ))}
                    </div>

                    <div className={style.footer_int_2_bloc}>
                        <h3 className={style.contact}>Contate Nós</h3>
                        <div className={style.footer_int_2_bloc_int}>
                            <Image src={brasil} alt='Bandeira do Brasil' />
                            Brasil, São Paulo
                        </div>

                        <div className={style.footer_int_2_bloc_int}>
                            <Image src={eua} alt='Bandeira dos Estados Unidos' />
                            EUA, Los Angeles
                        </div>

                        <div className={style.footer_int_2_bloc_int}>
                            <Image src={reino_unido} alt='Bandeira do Reino Unido' />
                            Reino Unido, Londres
                        </div>

                        <div className={style.footer_int_2_bloc_int}>
                            <Image src={espanha} alt='Bandeira da Espanha' />
                            Espanha, Madri
                        </div>
                    </div>

                    <div className={style.footer_int_2_bloc}>
                        <h3>Legal Privacy</h3>
                        <Link href={'/'}><p>Políticas de  Privacidade</p></Link>
                        <Link href={'/'}><p>Termos & Condições</p></Link>
                        <Link href={'/'}><p>Licença</p></Link>
                        <Link href={'/'}><p>Recursos</p></Link>
                        <Link href={'/'}><p>Downloads</p></Link>
                    </div>
                </div>
                <hr />
                <p className={style.copy}>Site criado por: Thiago Mendes - Archmake Studio- © Todos os direitos reservados</p>
            </div>
    )
}
