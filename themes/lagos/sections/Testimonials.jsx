import {
  ChunkCollection,
  useGetChunk,
  ChunkFieldValue,
  Chunk,
} from "editmode-react";

export default function Testimonials() {
  const primaryColor = useGetChunk("primary_color");
  return (
    <section>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 shadow-sm radius-for-skewed overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="pt-8 pb-16 flex flex-wrap justify-center items-center">
            <div className="max-w-lg text-center mx-auto">
              <span className="text-primary font-bold">
                <Chunk contentKey="testimonial_home_section" field="Tagline" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                <Chunk contentKey="testimonial_home_section" field="Headline" />
              </h2>
            </div>
          </div>
          <div className="flex w-full relative">
            <ChunkCollection
              identifier="testimonials"
              tags={["home_testimonials"]}
              className="flex flex-wrap justify-center mx-auto"
              itemClass="mb-4 w-full lg:w-1/3 px-3"
            >
              <div className="p-5 bg-white shadow rounded">
                <svg
                  className="mb-6 text-primary h-8"
                  viewBox="0 0 32 28"
                  fill={primaryColor}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z" />
                  <path d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z" />
                </svg>
                <p className="text-gray-500 leading-loose mb-4">
                  <ChunkFieldValue identifier="Comment" />
                </p>
                <h4 className="font-bold font-heading">
                  <ChunkFieldValue identifier="Name" />
                </h4>
                <p className="text-gray-500">
                  <ChunkFieldValue identifier="Role" />
                </p>
              </div>
            </ChunkCollection>
          </div>
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
