
const dashboard = {
  top: "9%",
  left: "14%",
  width: "72%",
  height: "66"
}

export default function Header() {
  return (
    <section className="xl:bg-contain bg-top bg-no-repeat" style={{backgroundImage: "url('/metis-assets/backgrounds/intersect.svg')"}}>
      <div className="container px-4 mx-auto">
        <nav className="flex justify-between items-center py-6">
          <a className="text-3xl font-semibold leading-none" href="#">
            <img className="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" />
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-blue-600 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
              <svg className="fill-current h-4 w-4" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
            <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Product</a></li>
            <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Company</a></li>
            <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">About Us</a></li>
            <li><a className="text-sm text-blueGray-400 hover:text-blueGray-500" href="#">Features</a></li>
          </ul>
          <div className="hidden lg:block"><a className="mr-2 inline-block px-4 py-3 text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a><a className="inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a></div>
        </nav>
        <div className="pt-12 text-center">
          <div className="max-w-lg mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading"><span>The quick</span> <span className="text-blue-600">brown fox</span> <span>jumps over the lazy dog.</span></h2>
            <p className="text-blueGray-400 leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div><a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Check Now</a><a className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded" href="#">Documentation</a></div>
        </div>
      </div>
      <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto"><img src="metis-assets/elements/pattern.png" alt="" />
        <div className="absolute" style={dashboard}><img className="rounded" src="metis-assets/placeholders/metis-dashboard.png" alt="" /></div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap justify-between pt-8 pb-16">
          <div className="flex w-1/2 lg:w-auto py-4">
            <div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20"><img className="h-6 sm:h-8" src="metis-assets/icons/user-circle.svg" alt="" /></div>
            <div className="sm:py-2 ml-2 sm:ml-6"><span className="sm:text-2xl font-bold font-heading">250 324</span>
              <p className="text-xs sm:text-base text-blueGray-400">Followers</p>
            </div>
          </div>
          <div className="flex w-1/2 lg:w-auto py-4">
            <div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20"><img className="h-6 sm:h-8" src="metis-assets/icons/puzzle.svg" alt="" /></div>
            <div className="sm:py-2 ml-2 sm:ml-6"><span className="sm:text-2xl font-bold font-heading">6 510</span>
              <p className="text-xs sm:text-base text-blueGray-400">Solved Problems</p>
            </div>
          </div>
          <div className="flex w-1/2 lg:w-auto py-4">
            <div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20"><img className="h-6 sm:h-8" src="metis-assets/icons/thumb-up.svg" alt="" /></div>
            <div className="sm:py-2 ml-2 sm:ml-6"><span className="sm:text-2xl font-bold font-heading">14 350</span>
              <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
            </div>
          </div>
          <div className="flex w-1/2 lg:w-auto py-4">
            <div className="flex justify-center items-center bg-blueGray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20"><img className="h-6 sm:h-8" src="metis-assets/icons/terminal.svg" alt="" /></div>
            <div className="sm:py-2 ml-2 sm:ml-6"><span className="sm:text-2xl font-bold font-heading">149 324</span>
              <p className="text-xs sm:text-base text-blueGray-400">Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8"><a className="mr-auto text-3xl font-semibold leading-none" href="#"><img className="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" /></a>
            <button className="navbar-close">
              <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Product</a></li>
              <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Company</a></li>
              <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
              <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
            </ul>
            <div className="mt-4 pt-6 border-t border-blueGray-100"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-400"><span>Get in Touch</span><a className="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a></p><a className="inline-block px-1" href="#"><img src="metis-assets/icons/facebook-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="metis-assets/icons/twitter-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="metis-assets/icons/instagram-blue.svg" alt="" /></a>
          </div>
        </nav>
      </div>
    </section>
  )
}