import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>web3es - Aprendiendo a programar la Web3 en español</title>
        <meta
          name="description"
          content="web3es - Aprendiendo a programar la Web3 en español"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>web3es</h1>

        <p className={styles.description}>
          Aprendiendo a programar la <strong>web3</strong> en español
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.twitch.tv/web3es"
            target="_blank"
            className={styles.card}
          >
            <h2>Twitch &rarr;</h2>
          </a>

          <a
            href="https://discord.gg/Ev9qxCEzuH"
            target="_blank"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
          </a>

          <a
            href="https://twitter.com/web3es"
            target="_blank"
            className={styles.card}
          >
            <h2>Twitter &rarr;</h2>
          </a>

          <a
            href="https://www.instagram.com/web3es/"
            target="_blank"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p></p>
          </a>
        </div>
      </main>
    </div>
  );
}
