import "../styles/globals.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const { data, ...rest } = pageProps;
  console.log(data);
  return getLayout(<Component {...pageProps} />, data);
}

export default MyApp;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.editmode.com/chunks/?project_id=prj_gaf3K12dTGwe"
  );
  const { chunks } = await res.json();

  return {
    props: {
      chunks,
    },
  };
};
