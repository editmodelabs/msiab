import {
  Chunk,
  ChunkCollection,
  ChunkFieldValue,
  useGetChunk,
} from "editmode-react";

export default function Features() {
  const primaryColor = useGetChunk("primary_color");
  return (
    <>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="py-20 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span
                className="text-primary font-bold"
                style={{ color: primaryColor }}
              >
                <Chunk contentKey="feature_home_section" field="Tagline" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading leading-tight mt-3">
                <Chunk contentKey="feature_home_section" field="Headline" />
              </h2>
            </div>

            <ChunkCollection
              identifier="feature_highlights"
              tags={["home_feature_section"]}
              className="flex flex-wrap -mx-3"
              itemClass="mb-6 w-full lg:w-1/2 px-3"
            >
              {(getChunk, chunk) => (
                <div className="p-6 flex flex-wrap bg-white shadow rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-primary-100 bg-blend-screen">
                      <ChunkFieldValue
                        identifier="Image"
                        className="h-8 w-8 md:w-12 md:h-12 text-primary"
                        fill={primaryColor}
                      />
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading">
                      <ChunkFieldValue identifier="Name" />
                    </h3>
                    <p className="text-gray-500">
                      <ChunkFieldValue identifier="Description" />
                    </p>
                  </div>
                </div>
              )}
            </ChunkCollection>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10" />
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
    </>
  );
}
