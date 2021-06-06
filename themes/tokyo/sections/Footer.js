

export default function Footer() {
  return (
    <section class="relative">
      <div class="hidden lg:block absolute inset-0 w-1/2 ml-auto"></div>
      <div class="container px-4 mx-auto">
        <div class="relative flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left"><a class="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none" href="#"><img class="h-10" src="metis-assets/logos/metis/metis.svg" alt="" width="auto" /></a>
            <div class="mt-12 mb-16 lg:my-24">
              <p class="mb-4 text-xs text-blueGray-400 text-center lg:text-left">Subscribe and stay fully connected with product.</p>
              <div class="flex flex-wrap lg:flex-nowrap items-center">
                <div class="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                  <svg class="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input class="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                </div>
                <button class="w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" type="submit">Sign Up</button>
              </div>
            </div>
            <div class="hidden lg:block">
              <p class="text-xs text-blueGray-400">© 2020. All rights reserved.</p>
              <div class="-mx-2 mt-4"><a class="inline-block px-2" href="#"><img src="metis-assets/icons/facebook-blue.svg" alt="" /></a><a class="inline-block px-2" href="#"><img src="metis-assets/icons/twitter-blue.svg" alt="" /></a><a class="inline-block px-2" href="#"><img src="metis-assets/icons/instagram-blue.svg" alt="" /></a></div>
            </div>
          </div>
          <div class="relative w-full lg:w-1/2 px-4 py-8 lg:py-40 lg:pl-12">
            <div class="flex flex-row flex-wrap justify-around mb-12">
              <div class="w-1/2 lg:w-auto mb-12">
                <h5 class="mb-6 text-lg font-bold font-heading">Store</h5>
                <ul class="space-y-3">
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Third Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Fourth Link</a></li>
                </ul>
              </div>
              <div class="w-1/2 lg:w-auto mb-12">
                <h5 class="mb-6 text-lg font-bold font-heading">About</h5>
                <ul class="space-y-3">
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Third Link</a></li>
                </ul>
              </div>
              <div class="w-full lg:w-auto mb-4">
                <h5 class="mb-6 text-lg font-bold font-heading">Catalog</h5>
                <ul class="space-y-3">
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">First Link</a></li>
                  <li><a class="text-lg text-blueGray-400 hover:text-blueGray-500" href="#">Second Link</a></li>
                </ul>
              </div>
            </div>
            <div class="lg:hidden text-center">
              <p class="text-xs text-blueGray-400">© 2020. All rights reserved.</p>
              <div class="-mx-2 mt-4"><a class="inline-block px-2" href="#"><img src="metis-assets/icons/facebook-blue.svg" alt="" /></a><a class="inline-block px-2" href="#"><img src="metis-assets/icons/twitter-blue.svg" alt="" /></a><a class="inline-block px-2" href="#"><img src="metis-assets/icons/instagram-blue.svg" alt="" /></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}