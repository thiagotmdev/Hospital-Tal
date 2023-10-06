import { ReactElement } from "react";
import styles from './Layout.module.css';
import { Cabecalho } from "../Cabecalho";
import { Footer } from "../Footer";

type Props = {
    children: ReactElement;
}

export const Layout = ({children}: Props) =>{
    return(
        <div className={styles.container}>
            <header>
                <Cabecalho/>
            </header>
            <br />
            <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}