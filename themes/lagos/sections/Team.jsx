import { ChunkCollection, ChunkFieldValue, Chunk } from "editmode-react";

export default function Team() {
  return (
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
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-8 lg:mb-16 text-center mx-auto max-w-xl">
            <span className="text-green-600 font-bold">
              <Chunk contentKey="team_section_heading_before" />
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              <Chunk contentKey="team_section_heading" />
            </h2>
          </div>
          <ChunkCollection
            className="flex flex-wrap -mx-4"
            identifier="team_members"
            itemClass="mb-6 w-full lg:w-1/2 px-4"
          >
            {(getChunk, chunk) => (
              <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                <ChunkFieldValue
                  identifier="Avatar"
                  className="w-full lg:w-1/3 h-80 object-cover"
                />
                <div className="w-full lg:w-2/3 lg:pl-6 p-4">
                  <h4 className="mb-2 text-2xl font-bold font-heading">
                    <ChunkFieldValue identifier="Name" />
                  </h4>
                  <p className="mb-4 text-gray-500 leading-loose">
                    <ChunkFieldValue identifier="Bio" />
                  </p>
                  <div className="flex">
                    <a className="mr-3" href={getChunk(chunk, "FacebookURL")}>
                      <Chunk identifier="facebook_img" />
                    </a>
                    <a className="mr-3" href={getChunk(chunk, "TwitterURL")}>
                      <Chunk identifier="twitter_img" />
                    </a>
                    <a href={getChunk(chunk, "InstagramURL")}>
                      <Chunk identifier="instagram_img" />
                    </a>
                  </div>
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
  );
}
