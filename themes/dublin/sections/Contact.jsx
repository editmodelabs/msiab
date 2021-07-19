import {Chunk, ChunkCollection, useGetChunk} from "editmode-react";

export default function Contact() {
  return (
    <section class="relative pt-20 2xl:pt-40 bg-gray-800 border-t border-gray-700">
      <div class="hidden lg:block absolute top-0 right-0 h-full bg-gray-600 w-1/2"></div>
      <div class="container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="relative w-full lg:w-1/2 px-4 pb-20 overflow-hidden">
              {/* <img class="hidden lg:block absolute bottom-0 right-0 w-full h-screen -mr-20 -mb-52" src="zospace-assets/lines/circle.svg" alt=""/> */}
              {/* <img class="hidden lg:block absolute bottom-0 right-0 -mr-52 -mb-64" src="zospace-assets/lines/circle.svg" alt=""/> */}
              <div class="relative max-w-md">
                <div class="pb-16 mb-8 border-b border-gray-400">
                  <span class="text-lg text-blue-400 font-bold">
                    <Chunk contentKey="contact_us" field="Tagline" />
                  </span>
                  <h2 class="mt-10 mb-16 text-5xl font-bold font-heading text-white">
                    <Chunk contentKey="contact_us" field="Headline" />
                  </h2>
                  <ChunkCollection 
                    identifier="contact_info"
                    itemClass="py-6 px-8 mb-4 bg-gray-600 rounded-lg"          
                  >
                    {(getChunk, chunk) => (
                      <div class="flex items-center">
                        <span class="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                          <img src={getChunk(chunk, "Image")} />
                        </span>
                        <a class="text-lg font-bold text-white" href={getChunk(chunk, "Link")} target="_blank">
                          {getChunk(chunk, "Value")}
                        </a>
                      </div>
                    )}
                  </ChunkCollection>
                </div>
                <div class="max-w-xs">
                  <p class="text-gray-400">
                    <Chunk contentKey="contact_us" field="Description" />
                  </p>
                </div>
              </div>
            </div>
            <div class="relative w-full lg:w-1/2 px-4 pb-20">
              <div class="max-w-md lg:ml-20">
                <form 
                  method="POST" action={
                  `https://formsubmit.co/${
                    useGetChunk("email_capture_email_address")
                  }`
                }>
                  <h3 class="mb-10 text-2xl font-bold text-white">Send a message!</h3>
                  <input class="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none" type="email" placeholder="example@shuffle.dev" />
                  <input class="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none" type="text" placeholder="Subject" />
                  <textarea class="w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-3xl resize-none focus:outline-none" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                  <div class="flex mb-10">
                    <input type="checkbox" />
                    <p class="pl-4 max-w-xs text-sm text-gray-300">By singning up, you agree to our Terms, Data Policy and Cookies.</p>
                  </div>
                  <button class="py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}