import { Chunk, useGetChunk } from "editmode-react";
import Link from "next/link";
import handleNav from "../utils/handleNav";
import { useEffect } from "react";

export default function TopNav() {
  useEffect(() => {
    handleNav();
  }, []);
  const primaryColor = useGetChunk("primary_color");
  return (
    <nav className="relative px-6 py-6 flex justify-between items-center bg-white shadow">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4 font-bold text-primary leading-none flex">
          <Chunk identifier="logo_icon" className="w-5 text-primary mr-1" />
          <span>
            <Chunk identifier="company_name" className="text-lg" />
          </span>
        </a>
      </Link>

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
        <div className="flex items-center">
          <Link href="/">
            <a className="text-sm text-gray-400 hover:text-gray-500 px-8">
              Home
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/pricing">
            <a className="text-sm text-gray-400 hover:text-gray-500 px-8">
              Pricing
            </a>
          </Link>
        </div>
      </div>
      <a
        className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-primary font-bold rounded-l-xl rounded-t-xl transition duration-200"
        style={{ color: primaryColor }}
        href={useGetChunk("home_hero_secondary_cta", "Url")}
      >
        {useGetChunk("home_hero_secondary_cta", "Button Text")}
      </a>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <div className="mr-auto text-3xl font-bold leading-none">
              <Link href="/">
                <a className="inline-flex items-center p-2 mr-4 font-bold text-primary leading-none flex">
                  <Chunk
                    identifier="logo_icon"
                    className="w-5 text-primary mr-1"
                  />
                  <span>
                    <Chunk identifier="company_name" className="text-lg" />
                  </span>
                </a>
              </Link>
            </div>
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
            <div>
              <div className="mb-1">
                <Link href="/" replace>
                  <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded">
                    Home
                  </a>
                </Link>
              </div>
              <div className="mb-1">
                <Link href="/pricing" replace>
                  <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray-600 rounded">
                    Pricing
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}
