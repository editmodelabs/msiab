import {Chunk, useGetChunk} from "editmode-react";

export default function Contact() {
  return (
    <section class="relative pt-20 2xl:pt-40 bg-gray-800 border-t border-gray-700">
      <div class="hidden lg:block absolute top-0 right-0 h-full bg-gray-600 w-1/2"></div>
      <div class="container px-4 mx-auto">
        <div class="max-w-5xl mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="relative w-full lg:w-1/2 px-4 pb-20 overflow-hidden">
              <div class="relative max-w-md">
                <div class="pb-16 mb-8 border-b border-gray-400">
                  <span class="text-lg text-blue-400 font-bold">
                    <Chunk contentKey="contact_us" field="Tagline" />
                  </span>
                  <h2 class="mt-10 mb-16 text-5xl font-bold font-heading text-white">
                    <Chunk contentKey="contact_us" field="Headline" />
                  </h2>
                  <a target="_blank" href={`tel:${useGetChunk("contact_info_phone")}`}>
                    <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg flex items-center">
                      <span className="flex items-center justify-center w-12 h-12 mr-8 bg-primary rounded-lg">
                      <svg class="w-4 h-4" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.935 13.317c-.124-.711-.733-1.277-1.48-1.377l-4.147-.554c-.753-.103-1.498.296-1.81.967-.08.17-.146.348-.2.532a9.593 9.593 0 0 1-3.104-2.083A9.57 9.57 0 0 1 5.11 7.699a3.78 3.78 0 0 0 .532-.2c.67-.312 1.068-1.055.967-1.808l-.555-4.146C5.954.797 5.388.19 4.664.065A4.15 4.15 0 0 0 3.974 0 3.97 3.97 0 0 0 .612 1.877C-.157 3.131-.05 4.735.129 5.992c.405 2.848 1.869 5.712 4.016 7.858a14.003 14.003 0 0 0 5.702 3.456c1.087.34 2.447.694 3.758.694.98 0 1.932-.198 2.718-.75A3.952 3.952 0 0 0 18 14.02c0-.208-.02-.429-.065-.703z" fill="#fff"/>
                      </svg>
                      </span>
                      <Chunk identifier="contact_info_phone" className="text-lg font-bold text-white"/>
                    </div>
                  </a>
                  <a target="_blank" href={`tel:${useGetChunk("contact_info_email")}`}>
                    <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg flex items-center">
                      <span className="flex items-center justify-center w-12 h-12 mr-8 bg-primary rounded-lg">
                      <svg class="w-5 h-4" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.81 0H2.189A2.19 2.19 0 0 0 0 2.187v9.625A2.19 2.19 0 0 0 2.188 14h16.624A2.19 2.19 0 0 0 21 11.812V2.187A2.192 2.192 0 0 0 18.81 0zm.44 4.733-7.534 3.938a2.683 2.683 0 0 1-1.217.298c-.42 0-.83-.105-1.216-.298L1.749 4.733V2.755l8.338 4.358a.909.909 0 0 0 .823 0l8.338-4.358v1.978h.001z" fill="#fff"/>
                      </svg>
                      </span>
                      <Chunk identifier="contact_info_email" className="text-lg font-bold text-white"/>
                    </div>
                  </a>
                  <a target="_blank" href={`tel:${useGetChunk("contact_info_location")}`}>
                    <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg flex items-center">
                      <span className="flex items-center justify-center w-12 h-12 mr-8 bg-primary rounded-lg">
                      <svg class="w-5 h-5" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 11c-2.482 0-4.5 2.096-4.5 4.673 0 3.556 3.895 7.014 4.061 7.16a.663.663 0 0 0 .878 0C19.105 22.69 23 19.23 23 15.674 23 13.096 20.982 11 18.5 11zm0 6.462c-.992 0-1.8-.828-1.8-1.846 0-1.018.808-1.845 1.8-1.845s1.8.827 1.8 1.845-.808 1.846-1.8 1.846z" fill="#fff"/><path d="M9.018 0C4.048 0 0 4.04 0 9s4.048 9 9.018 9c.883 0 1.74-.125 2.542-.369-1.38-3.094-.703-5.877 1.164-7.712-.033 0-.464-.185-.497-.198-3.531-1.342-6.834 2.902-3.868 6.435a7.215 7.215 0 0 1-5.51-3.446 2.824 2.824 0 0 0 2.174-2.718c.02-.83.582-1.4 1.281-1.556 3.114-.666 3.409-4.53 2.21-6.605.83-.046 1.53-.023 2.524.27-.25 2.513 1.112 5.56 4.122 5.274l.856-.099c.072.297.118.594.145.909.566-.098 1.286-.116 1.839-.01C17.574 3.6 13.706 0 9.018 0z" fill="#fff"/>
                      </svg>
                      </span>
                      <Chunk identifier="contact_info_location" className="text-lg font-bold text-white"/>
                    </div>
                  </a>
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
                    useGetChunk("contact_info_email")
                  }`
                }>
                  <h3 class="mb-10 text-2xl font-bold text-white">
                    <Chunk identifier="contact_us_form" field="Headline"/>
                  </h3>
                  <input class="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none" type="email" placeholder={useGetChunk("contact_form_email_placeholder")} />
                  <input class="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none" type="text" placeholder={useGetChunk("contact_form_subject_placeholder")} />
                  <textarea class="w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-3xl resize-none focus:outline-none" name="" id="" cols="30" rows="10" placeholder={useGetChunk("contact_form_message_placeholder")}></textarea>
                  <button class="py-4 px-12 text-white font-bold bg-primary hover:bg-blue-600 rounded-full transition duration-200">
                    <Chunk identifier="contact_us_form_cta" field="Button Text"/>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}