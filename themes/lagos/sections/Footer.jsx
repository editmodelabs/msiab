export default function Footer() {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div class="py-20 bg-gray-50 radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/3 mb-16 lg:mb-0">
              <a
                class="inline-block mb-3 text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  class="h-12"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <p class="mb-4 max-w-sm text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tincidunt felis eu est.
              </p>
              <div>
                <a
                  class="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img class="mx-auto" src="atis-assets/social/facebook.svg" />
                </a>
                <a
                  class="inline-block w-10 mr-2 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img class="mx-auto" src="atis-assets/social/twitter.svg" />
                </a>
                <a
                  class="inline-block w-10 p-2 bg-gray-50 hover:bg-gray-100 rounded"
                  href="#"
                >
                  <img class="mx-auto" src="atis-assets/social/instagram.svg" />
                </a>
              </div>
            </div>
            <div class="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
              <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 class="mb-6 text-2xl font-bold">Products</h3>
                <ul>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Services
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      News and Stories
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 class="mb-6 text-2xl font-bold">Important Links</h3>
                <ul>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Organization Team
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Our Journeys
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Pricing Plans
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Roadmap
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full md:w-1/3 lg:w-auto">
                <h3 class="mb-6 text-2xl font-bold">Company</h3>
                <ul>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Jobs
                    </a>
                  </li>
                  <li class="mb-4">
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Press
                    </a>
                  </li>
                  <li>
                    <a class="text-gray-800 hover:text-gray-600" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="lg:text-center text-sm text-gray-400 border-t border-gray-100 pt-12 mt-16">
            &copy; 2021. All rights reserved.
          </p>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg
          class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
}
