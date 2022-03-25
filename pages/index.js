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
        <meta
          name="keywords"
          content="web3, solidity, smart contract, smart contracts, ethereum, ethers, ethersjs, hardhat, etherscan, web3es"
        />
        <meta name="author" content="web3es" />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PLSTMB6');`}}></script>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLSTMB6"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      
      <main className={styles.main}>
        <h1 className={styles.title}>web3es</h1>

        <p className={styles.description}>
          Aprendiendo a programar la <strong>web3</strong> en español
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.twitch.tv/web3es"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Twitch &rarr;</h2>
          </a>

          <a
            href="https://discord.gg/Ev9qxCEzuH"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Discord &rarr;</h2>
          </a>

          <a
            href="https://twitter.com/web3es"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Twitter &rarr;</h2>
          </a>

          <a
            href="https://t.me/web3es"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Telegram &rarr;</h2>
          </a>

          <a
            href="https://www.instagram.com/web3es/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
          </a>

          <a
            href="https://www.youtube.com/channel/UCNmAZQuo0DrGPzI7t8XiP_g"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>YouTube &rarr;</h2>
          </a>

          <a
            href="https://www.facebook.com/web3es/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Facebook &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}
