import Footer from "../sections/Footer";
import TopNav from "../sections/TopNav";
import Head from "next/head";
import Layout from "../components/Layout";
import { Chunk, ChunkCollection } from "editmode-react";
import { Editmode } from "editmode-react";

export default function Pricing() {
  return (
    <div>
      <Head />
      <section>
        <div class="skew skew-top mr-for-radius">
          <svg
            class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-top ml-for-radius">
          <svg
            class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div class="py-20 bg-gray-50 radius-for-skewed">
          <div class="container mx-auto px-4">
            <div class="mb-16 w-full flex flex-wrap items-center">
              <div class="w-full lg:w-2/3">
                <span class="text-primary font-bold">
                  <Chunk identifier="pricing_page_tagline" />
                </span>
                <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                  <Chunk identifier="pricing_page_headline" />
                </h2>
              </div>
              <div class="w-full lg:w-1/3 text-gray-600">
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
                  <div class="w-full lg:w-1/5 px-3 self-start">
                    <h3 class="mb-4 text-2xl font-bold font-heading">
                      {getChunk(chunk, "Title")}
                    </h3>
                  </div>
                  <div class="w-full lg:w-2/5 px-3">
                    <ul class="mb-4 text-gray-500">
                      <li class="mb-4 flex">
                        <svg
                          class="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Vestibulum viverra</span>
                      </li>
                      <li class="mb-4 flex">
                        <svg
                          class="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Morbi mollis metus pretium</span>
                      </li>
                      <li class="flex">
                        <svg
                          class="mr-2 w-5 h-5 text-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>Etiam lectus nunc, commodo</span>
                      </li>
                    </ul>
                  </div>
                  <div class="w-full lg:w-1/5 px-3 lg:text-center">
                    <div class="text-4xl font-bold">
                      {getChunk(chunk, "Price")}
                    </div>
                  </div>
                  <div class="w-full lg:w-1/5 px-3">
                    <a
                      class="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-green-700 text-white font-bold leading-loose transition duration-200"
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
        <div class="skew skew-bottom mr-for-radius">
          <svg
            class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-bottom ml-for-radius">
          <svg
            class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Pricing.getLayout = (page) => (
  <Editmode projectId={process.env.NEXT_PUBLIC_PROJECT_ID}>
    <Layout>{page}</Layout>
  </Editmode>
);
