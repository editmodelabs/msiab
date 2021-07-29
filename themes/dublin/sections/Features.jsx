import { Chunk, ChunkCollection, ChunkFieldValue } from "editmode-react";

const bg_icon_colours = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500', 'bg-yellow-300', 'bg-blue-200']

export default function Features() {
  return (
    <>
      <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
      <div className="absolute h-40 w-40 bg-primary bottom-0 right-0 -mr-20 -mb-20 rounded-full"></div>
        <div className="container px-4 mx-auto">
          <div>
            <span className="text-primary font-bold mb-6">
              <Chunk contentKey="feature_home_section" field="Tagline" />
            </span>
            <h2 className="max-w-2xl mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading">
              <Chunk contentKey="feature_home_section" field="Headline" />
            </h2>
            <div className="w-full ">
              <ChunkCollection
                identifier="feature_highlights"
                tags={["home_feature_section"]}
                className="flex flex-wrap -mx-6 lg:-mx-8 w-full"
                itemClass="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-8 mb-20 lg:mb-0"
              >
                {(getChunk, chunk, index) => (
                  <div className="w-full mb-10 lg:mb-16"> 
                    <span className={`flex mb-10 justify-center items-center w-20 h-20 rounded-lg ${bg_icon_colours[index]}`}>
                      <ChunkFieldValue
                        identifier="Image"
                        className="h-8 w-8 md:w-12 md:h-12 text-white"
                      />
                    </span>
                    <div className="pb-px mb-12 bg-gray-500"></div>
                      <h3 className="mt-12 mb-8 text-lg font-bold font-heading text-white">
                        <ChunkFieldValue identifier="Name" />
                      </h3>
                      <p className="text-lg text-gray-200">
                        <ChunkFieldValue identifier="Description" />
                      </p>
                    
                  </div>
                )}
              </ChunkCollection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
