import Head from 'next/head'
import style from '../styles/Home.module.css';

export default function Home(){
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={style.container}>
        <div className={style.head}></div>
      </div>
    </>
  )
}
