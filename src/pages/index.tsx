import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>elias garcia alexandre</title>
        <meta name="description" content="My profile description to the web!" />

        {/* basic SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content="Elias garcia alexandre" />
        <meta
          property="og:description"
          content="My profile description to the web!"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.photoBox}>
          <Image
            width={180}
            height={180}
            layout="fixed"
            draggable={false}
            id={styles.profilePhoto}
            src="https://github.com/eliasallex.png"
            alt="elias alexandre github profile photo"
          />
        </div>
        <h1>elias garcia alexandre</h1>
        <p>
          tech-focused programmer around the JavaScript language (React, RN,
          NodeJS).
        </p>
        <p>
          I currently play more with Typescript, using web frameworks.{" "}
          <span>in the IT area out of curiosity.</span>
        </p>
        <p>I´ve played with other languages like Python, Java and C#...</p>
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
