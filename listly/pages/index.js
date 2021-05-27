import Head from "next/Head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Listly | Home
        </title>
        <meta name="Home" content="Listly"/>
      </Head>

      <div className={styles.container}>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Home page</h1>

        <h3 className={styles.text} >
          First Next.js Project :)
        </h3>

        <Link href="/lists">
          <a className={styles.btn}>See listing </a>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  );
}

// removed footer and nav from here cause we created layout component which wraps app.js
