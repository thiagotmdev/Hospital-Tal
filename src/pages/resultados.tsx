import Head from 'next/head';
import style from '../styles/Styles.module.css';

const Planos = () => {
    return (
        <>
            <Head>
                <title>Resultados</title>
            </Head>
            <section>
                <div className={style.container}>
                    <h1 className={style.title}>Resultados</h1>
                    <div className={style.content}>
                        <h2>Aqui irá ficar o conteúdo da Página</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Planos;