import { ReactElement } from "react";
import styles from './Layout.module.css';
import { Cabecalho } from "../Cabecalho";

type Props = {
    children: ReactElement;
}

export const Layout = ({children}: Props) =>{
    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <Cabecalho/>
            </header>
            <br />
            <main>{children}</main>
            <footer className={styles.footer}>
                Todos os direitos reservados.
            </footer>
        </div>
    );
}