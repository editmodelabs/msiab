import {
  Chunk,
  ChunkCollection,
  ChunkFieldValue,
  useGetChunk,
} from "editmode-react";
export default function Footer() {
  const primaryColor = useGetChunk("primary_color");
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <a
                className="text-3xl font-bold text-primary leading-none flex items-center mb-3"
                href="/"
                style={{ color: primaryColor }}
              >
                <Chunk
                  identifier="logo_icon"
                  className="w-12 text-primary"
                  fill={primaryColor}
                />
                <span className="flex flex-col justify-center">
                  <Chunk identifier="company_name" className="text-3xl" />
                </span>
              </a>
              <Chunk
                identifier="company_tagline"
                className="mb-4 max-w-sm text-gray-400 leading-loose"
              />

              <ChunkCollection identifier="social_links" className="flex">
                {(getChunk, chunk) => {
                  return (
                    <a
                      className="inline-block w-8 mr-2 bg-gray-50 hover:bg-gray-100 rounded text-primary"
                      style={{ color: primaryColor }}
                      href={getChunk(chunk, "Url")}
                    >
                      <ChunkFieldValue
                        identifier="Image"
                        className="h-8 w-8 text-primary"
                      />
                    </a>
                  );
                }}
              </ChunkCollection>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <Chunk
                  identifier="footer_menu_title_1"
                  className="mb-6 text-2xl font-bold"
                />
                <ChunkCollection
                  identifier="navigation_items"
                  tags={["footer_nav_1"]}
                >
                  {(getChunk, chunk) => (
                    <div className="flex items-center">
                      <a
                        className="text-gray-800 hover:text-gray-600 mb-4"
                        href={getChunk(chunk, "Url")}
                      >
                        {getChunk(chunk, "Title")}
                      </a>
                    </div>
                  )}
                </ChunkCollection>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <Chunk
                  identifier="footer_menu_title_2"
                  className="mb-6 text-2xl font-bold"
                />
                <ChunkCollection
                  identifier="navigation_items"
                  tags={["footer_nav_2"]}
                >
                  {(getChunk, chunk) => (
                    <div className="flex items-center">
                      <a
                        className="text-gray-800 hover:text-gray-600 mb-4"
                        href={getChunk(chunk, "Url")}
                      >
                        {getChunk(chunk, "Title")}
                      </a>
                    </div>
                  )}
                </ChunkCollection>
              </div>

              <div className="w-full md:w-1/3 lg:w-auto">
                <Chunk
                  identifier="footer_menu_title_3"
                  className="mb-6 text-2xl font-bold"
                />
                <ChunkCollection
                  identifier="navigation_items"
                  tags={["footer_nav_3"]}
                >
                  {(getChunk, chunk) => (
                    <div className="flex items-center">
                      <a
                        className="text-gray-800 hover:text-gray-600 mb-4"
                        href={getChunk(chunk, "Url")}
                      >
                        {getChunk(chunk, "Title")}
                      </a>
                    </div>
                  )}
                </ChunkCollection>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-gray-100 pt-12 mt-16">
            &copy; 2021. All rights reserved.
          </p>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill={primaryColor} points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
}
