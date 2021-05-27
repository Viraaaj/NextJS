import Head from "next/Head";
import Link from "next/Link";
import styles from "../../styles/Lists.module.css";

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
        <h1 className="users">All users</h1>
        {people.map((person) => (
          <Link href={"/lists/" + person.id} key={person.id}>
            <a className={styles.personInfo}>
              <h3>{person.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Lists;

// if we go to /lists then this file will be shown in browser
