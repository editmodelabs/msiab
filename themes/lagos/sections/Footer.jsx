export default function Footer() {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <a
                className="inline-block mb-3 text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <p className="mb-4 max-w-sm text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tincidunt felis eu est.
              </p>
              <div>
                <a
                  className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img
                    className="mx-auto"
                    src="atis-assets/social/facebook.svg"
                  />
                </a>
                <a
                  className="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img
                    className="mx-auto"
                    src="atis-assets/social/twitter.svg"
                  />
                </a>
                <a
                  className="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img
                    className="mx-auto"
                    src="atis-assets/social/instagram.svg"
                  />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Products</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      News and Stories
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold">Important Links</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Organization Team
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Our Journeys
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Pricing Plans
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Roadmap
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold">Company</h3>
                <ul>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Jobs
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-800 hover:text-gray-600" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
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
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
}
