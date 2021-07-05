import { ChunkCollection, ChunkFieldValue } from "editmode-react";
import { useState } from "react";
import handleClick from "../utils/handleClick";

const GeneralPanelContent = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <ul>
          <ChunkCollection
            identifier="faqs"
            tags={["faq_general"]}
            itemClass="py-12 pr-4 border-b"
          >
            {(getChunk, chunk) => (
              <li>
                <button
                  className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
                  id={getChunk(chunk, "Question")}
                  onClick={(e) =>
                    handleClick(e, activeQuestions, setActiveQuestions)
                  }
                  data-id={getChunk(chunk, "Question")}
                >
                  <span className="text-xl">
                    <ChunkFieldValue identifier="Question" />
                  </span>
                  <svg
                    className="w-4 h-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        activeQuestions.includes(getChunk(chunk, "Question"))
                          ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                          : "M5 10l7-7m0 0l7 7m-7-7v18"
                      }
                    ></path>
                  </svg>
                </button>
                <p
                  className={
                    activeQuestions &&
                    activeQuestions.includes(getChunk(chunk, "Question"))
                      ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                      : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  }
                >
                  <ChunkFieldValue identifier="Answer" />
                </p>
              </li>
            )}
          </ChunkCollection>
        </ul>
      </div>
    </div>
  );
};

export default GeneralPanelContent;
