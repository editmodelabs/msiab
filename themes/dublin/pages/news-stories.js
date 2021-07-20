import BlogPosts from "../sections/BlogPosts";
import Layout from "../components/Layout";

export default function News() {
  return (
    <BlogPosts />
  );
}

News.getLayout = (page) => <Layout pageName="News">
  {page}</Layout>;