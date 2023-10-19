import style from './Formulario_Consuta.module.css';
import { countrys } from '../../utils/data_country';
import { Textarea } from '@nextui-org/input';
import Image from 'next/image';
import doctor_consult from '../../src/images/doctor_consult.png';

export const FormularioConsulta = () => {

    const handleMsg = () => {
        return;
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.container_1}>
                    <h2>Agende uma consulta <br />
                        gratuita</h2>
                    <form className={style.form} method='POST'>
                        <input type="text" name='first_name' placeholder='Primeiro Nome' />
                        <input type="text" name='last_name' placeholder='Sobrenome' />
                        <input type="email" name='email' placeholder='E-mail' />
                        <input type="tel" name='telephone' placeholder='Telefone' />
                        <select name="country" id="coutry">
                            {countrys.map((values, index) => (
                                <option value={values.value} key={index}>{values.country}</option>
                            ))}
                        </select>
                        <Textarea
                            placeholder='Digite aqui a sua mensagem'
                            minRows={30}
                            cols={95}
                            name='mensagem'
                            className={style.msg}
                        />
                        <button onClick={handleMsg}>Enviar</button>
                    </form>
                </div>
                <div className={style.container_2}>
                    <Image src={doctor_consult} alt='' />
                </div>

            </div>
        </>
    )
}