export const confirmSiteReadiness = async () => {
  const project_ready_res = await fetch(
    `https://api.editmode.com/clone_status/${process.env.NEXT_PUBLIC_PROJECT_ID}`
  );
  const { ready } = await project_ready_res.json();
  return ready;
};
