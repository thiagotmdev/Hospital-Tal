import Head from 'next/head'
import style from '../styles/Home.module.css';
import { Search } from '../../components/Search';
import { ForularioConsulta } from '../../components/Formulario_Consuta';
import Image from 'next/image';
import medico from '../images/medico.png';
import paciente from '../images/paciente.png';
import msg from '../icons/Group.svg';
import hosp from '../icons/predio-1.svg';
import world from '../icons/world.svg';
import tele_doctor from '../images/tele_doctor.png';
import onco from '../icons/ancologia.svg';
import endoc from '../icons/endocrinologia.svg';
import infert from '../icons/infertilidade.svg';
import saude_m from '../icons/saude_mental.svg';
import cardio from '../icons/cardiologia.svg';
import neuro from '../icons/neurologia.svg';
import reumo from '../icons/reumatologia.svg';
import plstic from '../icons/cirurgia_plastica.svg';
import doen_rar from '../icons/doencas_raras.svg';
import gravid from '../icons/gravidez.png';






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
            <Image src={tele_doctor} alt='Imagem de uma doutora com os braços cruzados' />
          </div>
        </div>

        <div className={style.global_plans}>
          <div className={style.global_plans_1}>
            <h2>Planos Globais</h2>
            <p>O melhor sistema de saúde  do mundo, agora acessível com o plano de associação global MediPocket</p>
          </div>
          <div className={style.global_plans_2}>
            <div className={style.global_plans_2_card}>
              <h3 className={style.global_plans_2_card_title}>Global Lite</h3>
              <p className={style.global_plans_2_card_apartir}>A partir de</p>
              <p className={style.global_plans_2_card_valor}> R$ 150,00</p>
              <ul>
                <li>Cobertura Global de Saúde em 50L-3Cr</li>
                <li>Conselheiro de Saúde</li>
                <li>Medicamentos com desconto</li>
                <li>Assistência com visto</li>
                <li>Triagem Genética Preventiva</li>
                <li>Serviço de concierge global</li>
              </ul>
              <div className={style.global_plans_2_card_button}>
                Contrate
              </div>
            </div>
            <div className={style.global_plans_2_card}>
              <h3 className={style.global_plans_2_card_title}>Global Family</h3>
              <p className={style.global_plans_2_card_apartir}>A partir de</p>
              <p className={style.global_plans_2_card_valor}> R$ 350,00</p>
              <ul>
                <li>Cobertura Global de Saúde em 80S-3Cr</li>
                <li>Conselheiro de Saúde</li>
                <li>Medicamentos com desconto</li>
                <li>Assistência com visto</li>
                <li>Triagem Genética Preventiva</li>
                <li>Serviço de concierge global</li>
              </ul>
              <div className={style.global_plans_2_card_button}>
                Contrate
              </div>
            </div>
          </div>
        </div>

        <div className={style.treatments}>
          <h2>Nossos Tratamentos</h2>
          <div className={style.treatments_int}>
            <div className={style.treatments_card}>
              <Image src={onco} alt='oncologia' />
              <p>Oncologia</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={endoc} alt='Endocrinologia' />
              <p>Endocrinologia</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={infert} alt='Infertilidade' />
              <p>Infertilidade</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={saude_m} alt='Saúde Mental' />
              <p>Saúde Mental</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={cardio} alt='Cardiologia' />
              <p>Cardiologia</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={neuro} alt='Neurologia' />
              <p>Neurologia</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={reumo} alt='Reumatologia' />
              <p>Reumatologia</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={plstic} alt='Cirurgia Plástica' />
              <p>Cirurgia Plástica</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={doen_rar} alt='Doenças Raras' />
              <p>Doenças Raras</p>
            </div>
            <div className={style.treatments_card}>
              <Image src={gravid} alt='Gravidez' />
              <p>Gravidez</p>
            </div>
          </div>
        </div>

        <ForularioConsulta />
      </div>
    </>
  )
}
