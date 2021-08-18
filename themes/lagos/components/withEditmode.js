import Layout from "./Layout";

const withEditmode = (Component) => {
  const wrappedComponent = (props) => (
    <>
      <Layout {...props}>
        <Component />
      </Layout>
    </>
  );

  return wrappedComponent;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.editmode.com/chunks/?project_id=${process.env.NEXT_PUBLIC_PROJECT_ID}`
  );
  const { chunks } = await res.json();

  return {
    props: {
      chunks,
    },
    revalidate: 45,
  };
};

export default withEditmode;
