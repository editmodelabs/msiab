import {Chunk} from "editmode-react"
import Layout from "../components/Layout";

export default function Organization() {
  return (
    <section className="pb-12 lg:pb-24 pt-12 lg:pt-20 overflow-hidden bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="text-xl lg:text-3xl font-bold mb-10 text-center">
          <Chunk contentKey="organization_static_page" field="Title"/>
        </h1>
        <div className="rounded bg-white shadow px-12 py-10">
          <Chunk contentKey="organization_static_page" field="Body" className="w-full static-page-body"/>
        </div>
      </div>
    </section>
  );
}

Organization.getLayout = (page) => <Layout pageName="Organization">
  {page}</Layout>;
