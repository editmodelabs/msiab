async function fetchPropChunks() {
  const tag = "top_nav";
  const identifier = "navigation_items";
  const id = process.env.NEXT_PUBLIC_PROJECT_ID;
  try {
    var res = await fetch(
      `https://api2.editmode.com/chunks?limit=&collection_identifier=${identifier}&project_id=${id}&branch_id=&tags%5B%5D=${tag}`
    );
    var data = await res.json();
  } catch (error) {
    console.error(error);
  }
  return data;
}

export default fetchPropChunks;
