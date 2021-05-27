import Head from "next/Head";
import styles from "../styles/About.module.css"

const About = () => {
  return (
    <>
      <Head>
        <title>Listly | About</title>

        <meta name="about" content="about" />
      </Head>

      <div >
        <h1 className={styles.aboutTitle}>About section</h1>
        
        <h3  className={styles.about}>
          Fetching list of users from Api and displaying their information :)
        </h3>
      </div>
    </>
  );
};

export default About;
