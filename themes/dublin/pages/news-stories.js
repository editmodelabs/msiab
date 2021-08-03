import BlogPosts from "../sections/BlogPosts";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";

export default function News() {
  return <BlogPosts />;
}

News.getLayout = (page) => <Layout pageName="News">{page}</Layout>;

export { getStaticProps };
