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

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;
