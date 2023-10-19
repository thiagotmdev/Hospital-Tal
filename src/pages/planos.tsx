import Head from 'next/head';
import style from '../styles/Styles.module.css';

const Planos = () => {
    return (
        <>
            <Head>
                <title>Planos</title>
            </Head>
            <section>
                <div className={style.container}>
                    <h1 className={style.title}>Nossos Planos</h1>
                    <div className={style.content}>
                        <h2>Aqui irá ficar o conteúdo da Página</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Planos;