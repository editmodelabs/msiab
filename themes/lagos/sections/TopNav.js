import {
  Chunk,
  ChunkCollection,
  ChunkFieldValue,
  useGetChunk,
} from "editmode-react";
import Link from "next/link";

function TopNav(props) {
  console.log(props);
  const items = [
    { title: "Home", url: "/" },
    { title: "Pricing", url: "/pricing" },
  ];
  return (
    <nav className="relative px-6 py-6 flex justify-between items-center bg-white shadow">
      {/* <a className="text-3xl font-bold text-primary leading-none flex" href="/">
        <Chunk identifier="logo_icon" className="w-5 text-primary" />
        <Chunk identifier="company_name" className="text-lg" />
      </a> */}

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
      <div className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto">
        {items.map((item, index) => (
          <div>
            <div className="flex items-center">
              {index != 0 && (
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
              )}
              <Link href={item.url ? item.url : ""}>
                <a className="text-sm text-gray-400 hover:text-gray-500 px-8">
                  {item.title ? item.title : ""}
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <a
        className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-primary font-bold rounded-l-xl rounded-t-xl transition duration-200"
        href={useGetChunk("home_hero_secondary_cta", "Url")}
      >
        {useGetChunk("home_hero_secondary_cta", "Button Text")}
      </a> */}
    </nav>
  );
}

export default TopNav;
