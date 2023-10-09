import style from './Search.module.css';
import Image from 'next/image';
import lupa from '../../src/icons/lupa.svg';

export const Search = () => {
   return(
        <>
        <div className={style.input_field}>
            <Image src={lupa} alt='lupa'/>
            <input type="text" className={style.input_text}/>
        </div>

        </>
   )
}