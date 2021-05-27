export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });

  return {
    // paths: paths
    paths, //we can use like this also cause names are same
    fallback: false
  };
};

export const getStaticProps = async(context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json();

    return {
        props: { person: data }
    }
}
// we are running this function 10 times here as we have 10 ids and context object is used
// as argument as id is attached to context.

const Details = ({person}) => {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.email}</p>
      <p>{person.website}</p>
      <p>{person.address.city}</p>
    </div>
  );
};

export default Details;
