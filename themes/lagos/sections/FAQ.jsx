import Tabs from "../components/Tabs";

export default function Faq() {
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
        <div className="border-b">
          <div className="mb-16 max-w-xl mx-auto px-4 text-center">
            <span className="text-green-600 font-bold">
              Dolor sit amet consectutar
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap px-4 text-center lg:-mx-4 lg:space-x-4 text-base lg:text-xl">
              <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-green-600 border-b-2 border-green-600">
                General
              </button>
              <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                Payments
              </button>
              <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                Returns
              </button>
              <button className="px-4 py-4 w-full md:w-1/2 lg:w-auto font-bold text-gray-400 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition duration-150">
                Refunds
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Tabs>
            <div label="General">General</div>
            <ul label="Payment">Payment</ul>
            <ul label="drum">
              <li className="py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </button>
                <p className="mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius. Maecenas rhoncus consectetur rutrum.
                </p>
              </li>
              <li className="py-6 lg:py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p className="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="py-6 lg:py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p className="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="py-6 lg:py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p className="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="py-6 lg:py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p className="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="py-6 lg:py-12 pr-4 border-b">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </button>
                <p className="hidden mt-4 pr-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
            </ul>
          </Tabs>
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
