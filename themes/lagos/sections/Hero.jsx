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
      <nav className="relative px-6 py-6 flex justify-between items-center bg-white shadow">
        
        <a
          className="text-3xl font-bold text-primary leading-none flex"
          href="/"
        >
          <Chunk identifier="logo_icon" className="w-5 text-primary" />
          <Chunk identifier="company_name" className="text-lg" />
        </a>

        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ChunkCollection
          identifier="navigation_items"
          tags={["top_nav"]}
          className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
        >
          {(getChunk, chunk) => (
            <div className="flex items-center">
              <a
                className="text-sm text-gray-400 hover:text-gray-500 px-4"
                href={getChunk(chunk, "Url")}
              >
                <ChunkFieldValue identifier="Title" />
              </a>
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </div>
          )}
        </ChunkCollection>

        <a
          className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-primary font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="#"
        >
          
          <Chunk contentKey="nav_link_contact" />
        </a>
      </nav>
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
