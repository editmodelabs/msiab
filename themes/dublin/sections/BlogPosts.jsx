import {Chunk, ChunkCollection} from "editmode-react";
import BlogPost from "../components/BlogPost";

export default function BlogPosts() {

  return (
    <section className="py-20 2xl:py-40 bg-gray-800 overflow-hidden border-t border-gray-700">
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <span className="text-lg text-blue-500 font-bold">
            <Chunk contentKey="blog_posts" field="Tagline" />
          </span>
          <h2 className="mt-8 text-6xl lg:text-7xl font-bold font-heading text-white">
            <Chunk contentKey="blog_posts" field="Headline" />
          </h2>
        </div>
          <ChunkCollection 
            identifier="blog_posts"
            className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 -mx-5"
            itemclassName="w-full h-full"
          >
            {(getChunk, chunk, ) => (
              <BlogPost chunk={chunk} getChunk={getChunk} />
            )}
          </ChunkCollection>
        </div>
    </section>
  );
}
