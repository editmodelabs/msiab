import {
  Chunk,
  ChunkCollection,
  useGetChunk,
  ChunkFieldValue,
} from "editmode-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-20 2xl:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 pb-6 lg:pb-20 border-b border-gray-100">
          <div className="w-full lg:w-3/5 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/2 lg:w-1/3 px-4 mb-12">
                <h3 className="mb-8 lg:mb-14 text-xl font-bold font-heading">
                  <Chunk identifier="footer_menu_title_1" />
                </h3>
                <ul className="text-lg">
                  <ChunkCollection
                    identifier="navigation_items"
                    tags={["footer_nav_1"]}
                  >
                    {(getChunk, chunk) => (
                      <Link href={getChunk(chunk, "Url")}>
                        <a className="hover:underline">
                          <p className="my-5">{getChunk(chunk, "Title")}</p>
                        </a>
                      </Link>
                    )}
                  </ChunkCollection>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/3 px-4 mb-12">
                <h3 className="mb-8 lg:mb-14 text-xl font-bold font-heading">
                  <Chunk identifier="footer_menu_title_2" />
                </h3>
                <ul className="text-lg">
                  <ChunkCollection
                    identifier="navigation_items"
                    tags={["footer_nav_2"]}
                  >
                    {(getChunk, chunk) => (
                      <Link href={getChunk(chunk, "Url")}>
                        <a className="hover:underline">
                          <p className="my-5">{getChunk(chunk, "Title")}</p>
                        </a>
                      </Link>
                    )}
                  </ChunkCollection>
                </ul>
              </div>
              <div className="w-full lg:w-1/3 px-4 mb-4">
                <h3 className="mb-8 lg:mb-14 text-xl font-bold font-heading">
                  <Chunk identifier="footer_menu_title_3" />
                </h3>
                <ul className="text-lg">
                  <ChunkCollection
                    identifier="navigation_items"
                    tags={["footer_nav_3"]}
                  >
                    {(getChunk, chunk) => (
                      <Link href={getChunk(chunk, "Url")}>
                        <a className="hover:underline">
                          <p className="my-5">{getChunk(chunk, "Title")}</p>
                        </a>
                      </Link>
                    )}
                  </ChunkCollection>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-4 order-first lg:order-last mb-16 lg:mb-0">
            <h3 className="mb-16 text-xl font-bold">
              <Chunk identifier="email_capture_section_headline" />
            </h3>
            <form
              method="POST"
              action={`https://formsubmit.co/${useGetChunk(
                "email_capture_email_address"
              )}`}
            >
              <div className="mb-8 flex items-center bg-white border border-gray-100 rounded-full">
                <span className="inline-block pl-6">
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18.5"
                      cy="18.5"
                      r="9.5"
                      fill="#1F40FF"
                      fillOpacity="0.15"
                    ></circle>
                    <circle
                      cx="18.5"
                      cy="18.5"
                      r="18.5"
                      fill="#1F40FF"
                      fillOpacity="0.06"
                    ></circle>
                    <circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle>
                  </svg>
                </span>
                <input
                  className="pl-4 py-4 rounded-full placeholder-gray-900 font-bold w-full"
                  type="email"
                  placeholder={useGetChunk("email_capture_input_placeholder")}
                />
                <button className="ml-auto px-4 px-8 lg:px-8 py-5 text-white font-bold bg-primary hover:bg-blue-600 rounded-full transition duration-200 whitespace-nowrap">
                  {useGetChunk("email_capture_button_text")}{" "}
                </button>
              </div>
              <p className="text-gray-300">
                <Chunk identifier="email_capture_section_tagline" />
              </p>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap items-center pt-10 mb-8 lg:mb-0">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="md:flex items-center">
              <Link href="/">
                <a className="inline-flex text-gray-900 text-xl">
                  <Chunk identifier="logo_icon" className="w-12 text-primary" />
                  <span className="flex flex-col justify-center">
                    <Chunk identifier="company_name" className="text-3xl" />
                  </span>
                </a>
              </Link>
              <span className="hidden md:inline-block mx-8 w-px h-8 bg-gray-50"></span>
              <p className="hidden lg:block text-sm">
                <span>© 2021.</span>
                <span className="text-gray-300 ml-1">All rights reserved.</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:flex items-center justify-end">
              <ChunkCollection identifier="social_links" className="flex">
                {(getChunk, chunk) => (
                  <a
                    className="inline-block mr-2"
                    href={getChunk(chunk, "Url")}
                  >
                    <ChunkFieldValue
                      identifier="Image"
                      className="h-8 w-8 text-primary"
                    />
                  </a>
                )}
              </ChunkCollection>
            </div>
          </div>
        </div>
        <p className="lg:hidden text-sm">
          <span>© 2021</span>
          <span className="text-gray-300">All rights reserved.</span>
        </p>
      </div>
    </section>
  );
}
