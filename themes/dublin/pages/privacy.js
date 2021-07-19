import {Chunk} from "editmode-react"
import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <section className="pb-12 lg:pb-24 pt-12 lg:pt-20 overflow-hidden bg-gray-100">
      <div className="container px-4 mx-auto">

        <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">
          <Chunk contentKey="privacy_policy_static_page" field="Title"/>
        </h1>
        <div className="rounded bg-white shadow px-12 py-10">
          <div>
            <Chunk contentKey="privacy_policy_static_page" field="Body"/>
          </div>
        </div>
      </div>
    </section>
  );
}

Privacy.getLayout = (page) => <Layout pageName="Privacy">
  {page}</Layout>;
