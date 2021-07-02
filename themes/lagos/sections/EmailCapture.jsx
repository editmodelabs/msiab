import { Chunk, useGetChunk } from "editmode-react";
export default function EmailCapture() {
  return (
    <section>
      <div class="skew skew-top mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-top ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div class="py-20 bg-primary radius-for-skewed">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <div class="mb-4 w-full lg:w-auto lg:mr-8 text-center">
              <div class="flex justify-center items-center p-5 mx-auto w-16 h-16 bg-white rounded">
              <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
            </div>
            <div class="mb-6 w-full lg:w-auto max-w-lg mx-auto lg:ml-0 mr-auto text-center lg:text-left">
              <h2 class="text-white text-4xl font-bold font-heading">
                <Chunk identifier='email_capture_section_headline' />
              </h2>
              <Chunk identifier='email_capture_section_tagline' className="text-white" />
            </div>
            <div class="w-full lg:w-2/5">
              <form action={`https://formsubmit.co/${useGetChunk('email_capture_email_address')}`} method="post">
                <div class="max-w-md lg:max-w-sm mx-auto flex flex-wrap items-center">
                  <input class="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose" type="email" placeholder={useGetChunk("email_capture_input_placeholder")} />
                  <button class="flex-none py-2 px-6 rounded-t-xl rounded-l-xl text-primary bg-white font-bold leading-loose transition duration-200">
                    {useGetChunk("email_capture_button_text")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="skew skew-bottom mr-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div class="skew skew-bottom ml-for-radius">
        <svg class="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  );
}

