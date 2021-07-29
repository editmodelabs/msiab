import {Chunk, useGetChunk} from "editmode-react";

const Hero = () => {
  return (
    <section className="pb-20 bg-gray-800">
      <div className="relative container px-4 pt-12 md:pt-20 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-20 2xl:mb-14">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <h2 className="max-w-2xl mt-12 mb-12 text-6xl 2xl:text-8xl text-white font-bold font-heading"><Chunk contentKey="home_hero" field="Headline"/></h2>
            <a className="inline-block px-12 py-5 text-lg text-white font-bold bg-primary hover:bg-blue-600 rounded-full transition duration-200"
              href={useGetChunk("home_hero_primary_cta", "Url")}>
              {useGetChunk("home_hero_primary_cta", "Button Text")}
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <Chunk contentKey="home_hero_image" className="rounded-3xl md:rounded-6xl md:rounded-br-none"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
