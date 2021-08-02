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
    "https://api.editmode.com/chunks/?project_id=prj_gaf3K12dTGwe"
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
