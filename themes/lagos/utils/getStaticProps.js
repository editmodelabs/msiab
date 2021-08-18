export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.editmode.com/chunks/?project_id=${process.env.NEXT_PUBLIC_PROJECT_ID}`
  );
  const { chunks } = await res.json();

  return {
    props: {
      chunks,
    },
    revalidate: 15,
  };
};
