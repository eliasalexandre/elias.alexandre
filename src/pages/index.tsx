import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>elias garcia alexandre</title>
        <meta name="description" content="my profile description to the web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.photoBox}>
          <Image
            id={styles.profilePhoto}
            width="100"
            height="100"
            src="https://github.com/eliasallex.png"
            alt="elias alexandre github profile photo"
          />
        </div>
        <h1>elias garcia alexandre</h1>
        <p>
          tech-focused programmer around the JavaScript language (React, RN,
          NodeJS).
        </p>
        <div id={styles.controls}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/eliasallex"
            className={styles.button}
          >
            github
          </a>
        </div>
      </main>
    </div>
  );
}
