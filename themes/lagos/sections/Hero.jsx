import { Chunk, useGetChunk } from "editmode-react";
import { Image } from "editmode-react";
const NavBar = () => {
  const primaryColor = useGetChunk("primary_color");
  const img = useGetChunk("home_hero_image");
  console.log(img);
  return (
    <section className="relative overflow-hidden pb-56 sm:pb-80">
      <img
        className="hidden sm:block md:block absolute w-full"
        src="atis-assets/background/lines.svg"
        alt=""
      />
      <div className="relative pt-12 md:pt-16 pb-32 md:pb-64  border-b-4 border-primary">
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="mb-10 text-4xl lg:text-5xl font-bold leading-tight">
              <Chunk contentKey="home_hero" field="Headline" />
            </h2>
            <div>
              <a
                className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 bg-primary text-white font-semibold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
                href={useGetChunk("home_hero_primary_cta", "Url")}
              >
                {useGetChunk("home_hero_primary_cta", "Button Text")}
              </a>
              <a
                className="shadow inline-block w-full lg:w-auto py-2 px-6 font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                href={useGetChunk("home_hero_secondary_cta", "Url")}
              >
                {useGetChunk("home_hero_secondary_cta", "Button Text")}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 max-w-3xl mx-auto px-4">
          <Chunk
            contentKey="home_hero_image"
            className="rounded-3xl md:rounded-6xl md:rounded-br-none"
          />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
