import Head from 'next/head'
import style from '../styles/Home.module.css';
import { Search } from '../../components/Search';
import Image from 'next/image';
import medico from '../images/medico.png';
import paciente from '../images/paciente.png';
import msg from '../icons/Group.svg';
import hosp from '../icons/predio-1.svg';
import world from '../icons/world.svg';
import tele_doctor  from '../images/tele_doctor.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={style.container}>
        <div className={style.head}>
          <h1>Nós Cuidamos Da Sua Saúde e</h1><br /><h2>Bem Estar</h2>
          <Search />
          <div className={style.cont_medico}>
            <Image src={medico} alt='imagem de um médico' className={style.img_medico} />
            <Image src={paciente} alt='paciente em video chamada' className={style.img_paciente} />
          </div>
        </div>

        <div className={style.cont_info}>
            <div className={style.cont_info_int1}>
              Uma Experiência Excepcional em Cuidar da Saúde
            </div>
            <div className={style.cont_info_int2}>
              <div className={style.cont_info_int2_card}>
                <Image src={msg} alt='icone de balões de menssagem' />
                <h3>Segunda Opinião</h3>
                <p>Ao enfrentar uma situação séria,
                  doença que muda a vida, entendemos a importância crítica de obter conselhos de especialistas</p>
              </div>
              <div className={style.cont_info_int2_card}>
                <Image src={hosp} alt='icone de um hospital' />
                <h3>Tratamento</h3>
                <p>Obtenha ajuda dos hospitais e especialistas mais bem escolhidos que se destacam no fornecimento de cuidados de saúde premium.</p>
              </div>
              <div className={style.cont_info_int2_card}>
                <Image src={world} alt='icone de globo mundial' />
                <h3>Planos Globais</h3>
                <p>Planos que cuidam da sua saúde em qualquer parte do mundo.</p>
              </div>
            </div>
          </div>

          <div className={style.teleconsult}>
            <div className={style.teleconsult_info}>
              <h2>Teleconsulta Com Nossos 
              Especialistas</h2>
              <div className={style.btn_tele}>Agende uma teleconsulta</div>
            </div>
            <div className={style.teleconsult_image}>
              <Image src={tele_doctor} alt='Imagem de uma doutora com os braços cruzados'/>
            </div>
          </div>
      </div>
    </>
  )
}
