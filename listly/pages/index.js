import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <h1 className={styles.title} >Home page</h1>

      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adipis text</p>

      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adipis text</p>

      <Link href="/lists">
        <a className={styles.btn}>See listing </a>
      </Link>
      {/* <Footer /> */} 
    </div>
  );
}

// removed footer and nav from here cause we created layout component which wraps app.js
