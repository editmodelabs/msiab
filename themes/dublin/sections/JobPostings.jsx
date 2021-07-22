import {Chunk, ChunkCollection} from "editmode-react";
import JobPosting from "../components/JobPosting";

export default function JobPostings() {
  return (
    <section className="relative py-20 2xl:py-40 bg-gray-800 border-t border-gray-700">
      <div className="container px-4 mx-auto">
        <div className="mb-14 pb-16 text-center">
          <span className="text-lg text-blue-500 font-bold">
            <Chunk contentKey="job_postings" field="Tagline" />
          </span>
          <h2 className="mt-8 text-5xl font-bold font-heading text-white">
          <Chunk contentKey="job_postings" field="Headline" />
          </h2>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded">
          <ChunkCollection 
            identifier="job_postings"
            className="divide-y divide-gray-200 rounded"
            itemclassName=""
          >
            <JobPosting />
          </ChunkCollection>
        </div>
      </div>
    </section>
  );
}