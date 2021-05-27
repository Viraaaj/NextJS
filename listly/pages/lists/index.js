import Head from "next/Head";
import styles from "../../styles/Lists.module.css"

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      people: data,
    },
  };
};

const Lists = ({ people }) => {
  return (
    <>
      <Head>
        <title>Listly | Lists</title>

        <meta name="Lists" content="Lists" />
      </Head>

      <div>
        <h1>All list</h1>
        {people.map((person) => (
          <div key={person.id}>
            <a className={styles.personInfo}>
              <h3>{person.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Lists;

// if we go to /lists then this file will be shown in browser
