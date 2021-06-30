
import { ChunkCollection, ChunkFieldValue, Chunk } from "editmode-react";

export default function HowItWorks() {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-gray-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="mb-16 mx-auto max-w-md text-center">

            <span class="text-primary font-bold">
              <Chunk contentKey="how_it_works" field="Tagline" />
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold font-heading">
              <Chunk contentKey="how_it_works" field="Headline" />
            </h2>
          </div>
          <div class="flex flex-wrap -mx-4">

            <ChunkCollection
              identifier="how_it_works_steps"
              className="flex flex-wrap -mx-4"
              itemClass="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              {(getChunk, chunk) => (
                <div class="py-10 px-6 bg-white shadow rounded text-center">
                  <span class="mb-6 w-16 h-16 inline-flex justify-center items-center bg-primary-100 rounded text-2xl text-primary font-bold">
                    {/* Render the current index */}
                    1
                  </span>
                  <ChunkFieldValue
                    identifier="Title"
                    className="mb-4 text-2xl font-bold font-heading block"
                  />
                  <ChunkFieldValue
                    identifier="Description"
                    className="text-gray-500 leading-loose"
                  /> 
                </div>
              )}
            </ChunkCollection>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  )
}
