import style from './Cabecalho.module.css';
import { Navbar } from '../Navbar';

export const Cabecalho = () =>{
    return(
        <>
            <div className={style.container}>
                <div className={style.logo}>...</div>
                <Navbar/>
            </div>
        </>
    )
}