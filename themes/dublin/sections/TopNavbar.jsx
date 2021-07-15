import { Chunk, useGetChunk } from "editmode-react";

const TopNavbar = () => {
  return (
    <section className="bg-gray-800">
      <nav className="relative">
        <div className="flex py-8 px-4 lg:px-8 justify-between items-center">
          <a className="text-2xl text-white font-bold inline-flex" href="#">
            <Chunk identifier="logo_icon" className="w-5 text-primary mr-1"/>
            <Chunk identifier="company_name" className="text-lg"/>
          </a>
          <div className="lg:hidden">
            <button className="p-2 navbar-burger">
              <svg className="w-10 h-3" width="39" height="13" viewBox="0 0 39 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="39" height="2" rx="1" fill="#C4C4C4"></rect>
                <rect x="19" y="11" width="20" height="2" rx="1" fill="#C4C4C4"></rect>
              </svg>
            </button>
          </div>
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <ul className="flex items-center text-white space-x-10">
              <li>
                <a className="text-white font-bold text-lg" href="/">Home</a>
              </li>
              <span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                </svg>
              </span>
              <li>
                <a className="text-white font-bold text-lg" href="/team">Team</a>
              </li>
              <span>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#726B6B"></circle>
                </svg>
              </span>
              <li>
                <a className="text-white font-bold text-lg" href="/pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <a className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded"
              href={
                useGetChunk("home_hero_secondary_cta", "Url")
            }>
              {
              useGetChunk("home_hero_secondary_cta", "Button Text")
            } </a>
          </div>
        </div>
      </nav>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white overflow-y-auto">
          <div className="flex items-center mb-16 pr-6">
            <a className="ml-10 mr-auto text-2xl text-gray-800 font-bold inline-flex" href="#">
              <Chunk identifier="logo_icon" className="w-5 text-primary mr-1"/>
              <Chunk identifier="company_name" className="text-lg"/>
            </a>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/">Home</a>
              </li>
              <li className="mb-1 px-10">
                <a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/team">Team</a>
              </li>
              <li className="mb-1 px-10">
                <a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/pricing">Pricing</a>
              </li>
              <li className="mb-1 px-10">
                <a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/company">About Us</a>
              </li>
              <li className="mb-1 px-10">
                <a className="block pl-8 py-4 text-xl text-gray-800 hover:bg-blueGray-50 rounded-xl" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <div className="pt-6">
              <a className="block mb-4 py-4 px-12 text-gray-800 text-center font-bold border border-gray-50 hover:border-gray-100 rounded-full" href="#">Sign in</a>
              <a className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href={useGetChunk("home_hero_secondary_cta", "Url")}>{useGetChunk("home_hero_secondary_cta", "Button Text")}</a>
            </div>
            <p className="mt-6 mb-4 text-lg text-center">
              <span>2021 © All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TopNavbar;