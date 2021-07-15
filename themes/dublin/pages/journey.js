import {Chunk} from "editmode-react"
import Layout from "../components/Layout";

export default function Journey() {
  return (
    <section className="pb-12 lg:pb-24 pt-12 lg:pt-20 overflow-hidden bg-gray-100 min-h-screen">
      <div className="container px-4 mx-auto">
        <div className="rounded bg-white shadow px-12 py-10 text-center">
          <h1 className="text-xl lg:text-3xl font-bold mb-10">
            <Chunk contentKey="our_journey_static_page" field="Title"/>
          </h1>
          <div>
            <Chunk contentKey="our_journey_static_page" field="Body"/>
          </div>
        </div>
      </div>
    </section>
  );
}

Journey.getLayout = (page) => <Layout pageName="Journey">
  {page}</Layout>;
