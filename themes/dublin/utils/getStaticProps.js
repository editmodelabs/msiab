export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.editmode.com/chunks/?project_id=${process.env.NEXT_PUBLIC_PROJECT_ID}`
  );
  const { chunks } = await res.json();

  const project_ready_res = await fetch(
    `https://api.editmode.com/clone_status/${process.env.NEXT_PUBLIC_PROJECT_ID}`
  );
  const { ready } = await project_ready_res.json();

  return {
    props: {
      chunks,
      ready,
    },
    revalidate: 15,
  };
};
