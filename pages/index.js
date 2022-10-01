import Head from "next/head";
import Image from "next/image";
import { enUS } from "../lang";
import styles from "../styles/main.module.css";

export default function JukeBox() {
    return (
        <div className={styles.container}>
            <Head>
                <title>JukeBox</title>
                <meta name="description" content="Jukebox is a musical app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>{enUS.WELCOME}</h1>
                <p className={styles.description}>{enUS.SCAN_QR_DESC}</p>
                <div className={styles.grid}></div>
            </main>
            <footer className={styles.footer}>
                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                    {enUS.POWERED_BY}
                    <Image src="/spotify.logo.svg" alt="Spotify Logo" width={120} height={80} />
                </a>
            </footer>
        </div>
    );
}
