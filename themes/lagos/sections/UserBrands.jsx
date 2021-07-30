import { Chunk, ChunkFieldValue, ChunkCollection } from "editmode-react";

export default function UserBrands() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
            <div className="max-w-md">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                <Chunk contentKey="brand_statement" />
              </h2>
              <p className="text-gray-500 leading-loose">
                <Chunk contentKey="brand_statement_desc" />
              </p>
            </div>
          </div>
          <ChunkCollection
            identifier="customer_logos"
            className="w-full lg:w-1/2 flex flex-wrap -mx-2"
            itemClass="mb-4 w-full lg:w-1/3 px-2"
          >
            <div className="py-16 bg-gray-50 rounded">
              <ChunkFieldValue className="mx-auto h-6" identifier="Logo" />
            </div>
          </ChunkCollection>
        </div>
      </div>
    </section>
  );
}
