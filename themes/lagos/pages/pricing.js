
import Footer from "../sections/Footer";
import TopNav from "../sections/TopNav";
import Head from 'next/head'

export default function Pricing() {
  return (
    <div>
      <Head>
      </Head>
      <TopNav />
     
      <section>
        <div class="skew skew-top mr-for-radius">
          <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-top ml-for-radius">
          <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div class="py-20 bg-gray-50 radius-for-skewed">
          <div class="container mx-auto px-4">
            <div class="mb-16 w-full flex flex-wrap items-center">
              <div class="w-full lg:w-1/2">
                <span class="text-primary font-bold">Dolor sit amet consectutar</span>
                <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading">Choose your best plan</h2>
              </div>
              <div class="w-full lg:w-1/2">
                <p class="max-w-xs lg:mx-auto text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div class="w-full lg:w-1/5 px-3 self-start">
                  <h3 class="mb-4 text-2xl font-bold font-heading">Beginner</h3>
                </div>
                <div class="w-full lg:w-2/5 px-3">
                  <ul class="mb-4 text-gray-500">
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Vestibulum viverra</span>
                    </li>
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li class="flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/5 px-3 lg:text-center">
                  <span class="text-4xl font-bold">Free</span>
                </div>
                <div class="w-full lg:w-1/5 px-3"><a class="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Get Started</a></div>
              </div>
              <div class="mb-8 w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div class="w-full lg:w-1/5 px-3 self-start">
                  <h3 class="mb-4 text-2xl font-bold font-heading">Intermediate</h3>
                </div>
                <div class="w-full lg:w-2/5 px-3">
                  <ul class="mb-4 text-gray-500">
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Vestibulum viverra</span>
                    </li>
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li class="flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/5 px-3 lg:text-center">
                  <span class="text-4xl font-bold">$29</span>
                </div>
                <div class="w-full lg:w-1/5 px-3"><a class="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Get Started</a></div>
              </div>
              <div class="w-full p-8 flex flex-wrap items-center bg-white rounded shadow">
                <div class="w-full lg:w-1/5 px-3 self-start">
                  <h3 class="mb-4 text-2xl font-bold font-heading">Professional</h3>
                </div>
                <div class="w-full lg:w-2/5 px-3">
                  <ul class="mb-4 text-gray-500">
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Vestibulum viverra</span>
                    </li>
                    <li class="mb-4 flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Morbi mollis metus pretium</span>
                    </li>
                    <li class="flex">
                      <svg class="mr-2 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Etiam lectus nunc, commodo</span>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-1/5 px-3 lg:text-center">
                  <span class="text-4xl font-bold">$49</span>
                </div>
                <div class="w-full lg:w-1/5 px-3"><a class="inline-block mt-4 lg:mt-0 py-2 px-6 rounded-l-xl rounded-t-xl bg-primary hover:bg-green-700 text-white font-bold leading-loose transition duration-200" href="#">Get Started</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="skew skew-bottom mr-for-radius">
          <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-bottom ml-for-radius">
          <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewbox="0 0 10 10" preserveaspectratio="none">
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>


      <Footer />
    
    </div>
  );
}
