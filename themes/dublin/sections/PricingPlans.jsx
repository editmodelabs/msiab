import {ChunkCollection, ChunkFieldValue, Chunk} from "editmode-react";

export default function PricingPlans() {

  return (
    <section className="py-20 2xl:py-40 bg-gray-800 border-t border-gray-700">
      <div className="container px-4 mx-auto">
        <div className="mb-16 md:mb-24 text-center">
          <p className="text-lg font-bold text-primary">
            <Chunk identifier="pricing_section" field="Tagline"/>
          </p>
          <h2 className="mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading">
            <Chunk identifier="pricing_section" field="Headline"/>
          </h2>
          <p className="text-lg text-gray-200">
            <Chunk identifier="pricing_section" field="Description"/>
          </p>
        </div>
        <ChunkCollection
          identifier="pricing_packages"
          className="max-w-7xl mx-auto"
          itemClass="w-full"
        >
          {(getChunk, chunk, index) => (
            <div className={`${index %2 != 0 ? 'bg-primary' : 'bg-gray-600'} rounded-3xl p-6 lg:p-12 mb-8`}>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/6 px-4 mb-10 lg:mb-0">
                  <h3 className="text-3xl font-bold font-heading text-white">{getChunk(chunk, "Title")}</h3>
                </div>
                <div className="w-full md:w-1/2 lg:w-2/6 px-4 mb-10 lg:mb-0">
                  <ChunkFieldValue
                    identifier="Description"
                    className="pricing-plan-description ml-6 flex items-center h-8 w-8 md:w-12 md:h-12 text-white whitespace-nowrap"
                  />
                </div>
                <div className="w-full md:w-1/2 lg:w-2/6 px-4 mb-10 lg:mb-0 text-center lg:border-l border-gray-500">
                  <div className="mb-1 flex justify-center font-bold text-white">
                    <p className="self-end text-5xl">{getChunk(chunk, "Price")}</p>
                  </div>
                </div>
                <div className="w-full lg:w-1/6 px-4 text-center lg:text-right">
                  <a className={`${index %2 == 0 ? 'bg-primary hover:bg-blue-600' : 'border border-blueGray-200 hover:border-blueGray-300'} whitespace-nowrap inline-block w-full py-4 px-6 rounded-full text-center font-bold text-white transition duration-200`} href={getChunk(chunk, "Link")}>{getChunk(chunk, "Button Text")}</a>
                </div>
              </div>
            </div>
          )}
        </ChunkCollection>
      </div>
    </section>
  );
}
