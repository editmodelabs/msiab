import { Chunk } from "editmode-react";
import Layout from "../components/Layout";
import { getStaticProps } from "../utils/getStaticProps";
export default function Journey() {
  return (
    <section className="pb-12 lg:pb-24 pt-12 lg:pt-20 overflow-hidden bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">
          <Chunk contentKey="our_journey_static_page" field="Title" />
        </h1>
        <div className="rounded bg-white shadow px-12 py-12 lg:py-20 flex flex-col items-center max-w-2xl m-auto">
          <Chunk
            contentKey="our_journey_static_page"
            field="Body"
            className="w-full static-page-body prose"
          />
        </div>
      </div>
    </section>
  );
}

Journey.getLayout = (page) => <Layout pageName="Journey">{page}</Layout>;

export { getStaticProps };
