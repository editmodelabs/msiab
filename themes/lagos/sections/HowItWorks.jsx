import {
  ChunkCollection,
  ChunkFieldValue,
  Chunk,
  useGetChunk,
} from "editmode-react";

export default function HowItWorks() {
  const primaryColor = useGetChunk("primary_color");
  return (
    <section className="shadow">
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 mx-auto max-w-md text-center">
            <span
              className="text-primary font-bold"
              style={{ color: primaryColor }}
            >
              <Chunk contentKey="how_it_works" field="Tagline" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading leading-tight mt-2">
              <Chunk contentKey="how_it_works" field="Headline" />
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <ChunkCollection
              identifier="How It Works Step"
              className="flex flex-wrap -mx-4"
              itemClass="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              {(getChunk, chunk, index) => (
                <div className="py-10 px-6 bg-white shadow rounded text-center my-3">
                  <span
                    className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-primary-100 rounded text-2xl text-primary font-bold"
                    style={{ color: primaryColor }}
                  >
                    {index + 1}
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
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
}
