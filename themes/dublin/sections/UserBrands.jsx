import {Chunk, ChunkFieldValue, ChunkCollection} from "editmode-react";

export default function UserBrands() {
  return (
    <section className="pb-24 pt-20 bg-gray-800 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
            <div className="lg:max-w-lg">
              <h2 className="mb-12 text-6xl 2xl:text-7xl font-bold font-heading text-white">
                <Chunk contentKey="brands_home_section" field="Headline"/>
              </h2>
              <p className="text-lg text-gray-200">
                <Chunk contentKey="brands_home_section" field="Description"/>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-3/5 px-4">
            <div className="flex justify-center items-center">
              <ChunkCollection identifier="customer_logos" className="w-full flex flex-wrap -mx-2" itemClass="my-2 w-full lg:w-1/3 px-2">
                <div className="py-16 bg-gray-50 rounded">
                  <ChunkFieldValue className="mx-auto h-6" identifier="Logo"/>
                </div>
              </ChunkCollection>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
