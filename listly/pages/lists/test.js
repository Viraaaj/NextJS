import Head from "next/Head";

const Test = () => {
  return (
    <>
      <Head>
        <title>Listly | Test</title>

        <meta name="Test" content="Test" />
      </Head>

      <div>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default Test;

// here as our test.js is inside pages => lists => test
// hence next.js will create a route called /lists/test
