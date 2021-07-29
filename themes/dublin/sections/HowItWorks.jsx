import {ChunkCollection, ChunkFieldValue, Chunk, useGetChunk} from "editmode-react";

export default function HowItWorks() {
  return (
    <section className="py-20 2xl:py-40 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg font-bold text-blue-500"><Chunk contentKey="how_it_works" field="Tagline"/></span>
                <h2 className="mt-12 mb-10 text-6xl font-bold font-heading"><Chunk contentKey="how_it_works" field="Headline"/></h2>
                <a className="inline-block px-12 py-5 text-white font-bold bg-primary hover:bg-blue-600 rounded-full transition duration-200"
                  href={
                    useGetChunk("home_hero_primary_cta", "Url")
                }>
                  {
                  useGetChunk("home_hero_primary_cta", "Button Text")
                }</a>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-5">
              <ul>
                <ChunkCollection
                  identifier="how_it_works_steps"
                  className="flex flex-col -mx-4"
                >
                  {(getChunk, chunk, index) => (
                    <li className="flex pb-10 mb-8 border-b border-gray-50">
                      <div className="mr-8">
                      <span className="flex justify-center items-center w-16 h-16 bg-blue-50 text-lg font-bold rounded-full">
                        {index + 1}
                      </span>
                      </div>
                      <div>
                      <ChunkFieldValue
                        identifier="Title"
                        className="mb-4 text-2xl font-bold font-heading block"
                      />
                      <ChunkFieldValue
                        identifier="Description"
                        className="text-gray-500 leading-loose"
                      /> 
                      </div>
                    </li>
                  )}
                  </ChunkCollection>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
