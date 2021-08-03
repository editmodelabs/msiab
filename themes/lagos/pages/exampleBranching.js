import Head from "next/head";
import {
  Editmode,
  Chunk,
  ChunkCollection,
  ChunkFieldValue,
  useGetChunk,
} from "editmode-react";

export default function Home() {
  return (
    <Editmode projectId="prj_Y5HfCBS4rqZg" branchId="Zg7LfqU0v4tP">
      <div className="container mx-auto">
        {/* Render a piece of standalone content with inline editing */}
        <Chunk identifier="logo_icon" className="w-5 text-primary" />{" "}
        {/* Image Chunk */}
        <Chunk identifier="company_name" /> {/* Plain Text Chunk */}
        {/* Render content from a collection, with inline editing */}
        <ChunkCollection identifier="testimonials">
          <ChunkFieldValue identifier="Name" />
          <ChunkFieldValue identifier="Role" />
          <ChunkFieldValue identifier="Comment" />
        </ChunkCollection>
        {/* Access the raw value of a chunk. (No inline editing)  */}
        <Head>
          <title>{useGetChunk("company_tagline")}</title>
        </Head>
      </div>
    </Editmode>
  );
}
