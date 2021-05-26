import React from "react";

const Hero = () => {
  <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-gray-50 border-b-4 border-green-600">
    <div className="relative container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="mb-10 text-4xl lg:text-5xl font-bold">
          Learn how We will help you to reach your goals
        </h2>
        <div>
          <a
            className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            Get Started
          </a>
          <a
            className="inline-block w-full lg:w-auto py-2 px-6 font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            How it works
          </a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 max-w-3xl mx-auto px-4">
      <img
        className="rounded-3xl md:rounded-6xl md:rounded-br-none"
        src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
        alt="/"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="flex items-center justify-center bg-white rounded-full">
          <svg
            className="w-16 h-16 text-green-600 hover:text-green-700 transition duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewbox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>;
};

export default Hero;
