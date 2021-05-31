export default function UserBrands() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
            <div className="max-w-md">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                Trusted by brands all over the world
              </h2>
              <p className="text-gray-500 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap -mx-2">
            <div className="mb-4 w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/slack.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-4 w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/dropbox.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-4 w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/spotify.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-4 w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/amazon.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-4 w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/netflix.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-2">
              <div className="py-16 bg-gray-50 rounded">
                <img
                  className="mx-auto h-6"
                  src="atis-assets/logo/brands/stripe.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
