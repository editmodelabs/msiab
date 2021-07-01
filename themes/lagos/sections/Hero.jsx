import { Chunk, ChunkCollection, ChunkFieldValue, useGetChunk } from "editmode-react";
const NavBar = () => {

  const primaryColor = useGetChunk("primary_color")
  return (
    
    <section className="relative overflow-hidden pb-56 sm:pb-80">
      
      <img
        className="hidden sm:block md:block absolute w-full"
        src="atis-assets/background/lines.svg"
        alt=""
      />
      
      <div className="relative pt-12 md:pt-16 pb-32 md:pb-64  border-b-4 border-primary">
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="mb-10 text-4xl lg:text-5xl font-bold leading-tight">
              <Chunk contentKey="home_hero" field="Headline" />
            </h2>
            <div>
              <a
                className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 bg-primary text-white font-semibold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                href={useGetChunk("home_hero_primary_cta","Url")}
              >
                {useGetChunk("home_hero_primary_cta","Button Text")}
              </a>
              <a
                className="inline-block w-full lg:w-auto py-2 px-6 font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                href={useGetChunk("home_hero_secondary_cta","Url")}
              >
                {useGetChunk("home_hero_secondary_cta","Button Text")}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 max-w-3xl mx-auto px-4">
          <Chunk contentKey="home_hero_image" className="rounded-3xl md:rounded-6xl md:rounded-br-none" />
        </div>
      </div>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ChunkCollection
              identifier="navigation_items"
              tags={["top_nav"]}
              itemClass="mb-1"
            >
              {(getChunk, chunk) => (
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href={getChunk(chunk, "Url")}
                >
                  {getChunk(chunk, "Title")}
                </a>
              )}
            </ChunkCollection>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
