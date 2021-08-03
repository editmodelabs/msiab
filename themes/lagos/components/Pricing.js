// import { Chunk, ChunkCollection, useGetChunk } from "editmode-react";
import Layout from "../components/Layout";
import { useGetChunk, Chunk, ChunkCollection } from "editmode-react";

export default function PricingSection(props) {
  const primaryColor = useGetChunk("primary_color");
  return (
    <div>
      <section>
        <div className="skew skew-top mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill={primaryColor} points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill={primaryColor} points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 w-full flex flex-wrap items-center">
              <div className="w-full lg:w-2/3">
                <span className="text-primary font-bold">
                  <Chunk
                    identifier="pricing_page_tagline"
                    style={{ color: primaryColor }}
                  />
                </span>
                <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                  <Chunk identifier="pricing_page_headline" />
                </h2>
              </div>
              <div className="w-full lg:w-1/3 text-gray-600">
                <Chunk identifier="pricing_page_description" />
              </div>
            </div>
            <ChunkCollection
              identifier="pricing_packages"
              className="flex flex-wrap"
              itemClass="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow"
            >
              {(getChunk, chunk) => (
                <>
                  <div className="w-full lg:w-1/5 px-3 self-start">
                    <h3 className="mb-4 text-2xl font-bold font-heading">
                      {getChunk(chunk, "Title")}
                    </h3>
                  </div>
                  <div className="w-full lg:w-2/5 px-3">
                    <ul className="mb-4 text-gray-500">
                      <li className="mb-4 flex">
                        <svg
                          className="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 20 20"
                          fill={primaryColor}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Vestibulum viverra</span>
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          className="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 20 20"
                          fill={primaryColor}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Morbi mollis metus pretium</span>
                      </li>
                      <li className="flex">
                        <svg
                          className="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewbox="0 0 20 20"
                          fill={primaryColor}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Etiam lectus nunc, commodo</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/5 px-3 lg:text-center">
                    <div className="text-4xl font-bold">
                      {getChunk(chunk, "Price")}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/5 px-3">
                    <a
                      className="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
                      href={getChunk(chunk, "Link")}
                    >
                      {getChunk(chunk, "Button Text")}
                    </a>
                  </div>
                </>
              )}
            </ChunkCollection>
          </div>
        </div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill={primaryColor} points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill={primaryColor} points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>
    </div>
  );
}
