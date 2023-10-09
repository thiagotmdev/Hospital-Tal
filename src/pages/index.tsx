import Head from 'next/head'
import style from '../styles/Home.module.css';
import { Search } from '../../components/Search';

export default function Home(){
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={style.container}>
        <div className={style.head}>
          <h1>Nós Cuidamos Da Sua Saúde e Bem Estar</h1><br />
          <Search/>
        </div>
      </div>
    </>
  )
}
