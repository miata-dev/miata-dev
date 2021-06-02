import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Miata.dev</title>
        <meta name="description" content="Mazda Miata MX5 DIY stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming soon!
        </h1>
      </main>
      <footer className={styles.footer}>
        <a href="https://github.com/miata-dev">
          <span className={styles.logo}>
            <img
              src="/GitHub-Mark-64px.png"
              alt="GitHub Logo"
              width={32}
              height={32}
            />
          </span>
        </a>
      </footer>
    </div>
  )
};
