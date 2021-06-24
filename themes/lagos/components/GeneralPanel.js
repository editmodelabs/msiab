import { Chunk, ChunkCollection, ChunkFieldValue } from "editmode-react";
import { useState, useRef, useCallback } from "react";
import handleClick from "../utils/handleClick";

const GeneralPanelContent = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [nodeId, setNodeId] = useState(1);

  const parRef = useRef();
  const pathRef = useRef();

  console.log(
    "path",
    pathRef.current?.parentNode?.parentNode.getAttribute("data-id")
  );
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
                    className="w-4 h-4 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      ref={pathRef}
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
                  ref={parRef}
                >
                  <ChunkFieldValue identifier="Answer" />
                </p>
              </li>
            )}
          </ChunkCollection>
        </ul>
      </div>
    </div>

    // <div className="container mx-auto px-4">
    //   <div className="max-w-3xl mx-auto">
    //     <ul>
    //       <li className="py-12 pr-4 border-b">
    //         <button
    //           className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
    //           data-id={"one"}
    //           onClick={(e) =>
    //             handleClick(e, activeQuestions, setActiveQuestions)
    //           }
    //         >
    //           <span className="text-xl">
    //             <Chunk contentKey="tab_one_question_one_title" />
    //           </span>
    //           <svg
    //             className="w-4 h-4 text-green-600"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d={
    //                 activeQuestions.includes("one")
    //                   ? "M19 14l-7 7m0 0l-7-7m7 7V3"
    //                   : "M5 10l7-7m0 0l7 7m-7-7v18"
    //               }
    //             ></path>
    //           </svg>
    //         </button>
    //         <p
    //           className={
    //             activeQuestions && activeQuestions.includes("one")
    //               ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //               : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //           }
    //         >
    //           <Chunk contentKey="tab_one_question_one_content" />
    //         </p>
    //       </li>
    //       <li className="py-6 lg:py-12 pr-4 border-b">
    //         <button
    //           className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
    //           data-id="two"
    //           onClick={(e) =>
    //             handleClick(e, activeQuestions, setActiveQuestions)
    //           }
    //         >
    //           <span className="text-xl">
    //             <Chunk contentKey="tab_one_question_two_title" />
    //           </span>
    //           <svg
    //             className="w-4 h-4 text-green-600"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d={
    //                 activeQuestions.includes("two")
    //                   ? "M19 14l-7 7m0 0l-7-7m7 7V3"
    //                   : "M5 10l7-7m0 0l7 7m-7-7v18"
    //               }
    //             ></path>
    //           </svg>
    //         </button>
    //         <p
    //           className={
    //             activeQuestions && activeQuestions.includes("two")
    //               ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //               : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //           }
    //         >
    //           <Chunk contentKey="tab_one_question_two_content" />
    //         </p>
    //       </li>
    //       <li className="py-6 lg:py-12 pr-4 border-b">
    //         <button
    //           className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
    //           data-id="three"
    //           onClick={(e) =>
    //             handleClick(e, activeQuestions, setActiveQuestions)
    //           }
    //         >
    //           <span className="text-xl">
    //             <Chunk contentKey="tab_one_question_three_title" />
    //           </span>
    //           <svg
    //             className="w-4 h-4 text-green-600"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d={
    //                 activeQuestions.includes("three")
    //                   ? "M19 14l-7 7m0 0l-7-7m7 7V3"
    //                   : "M5 10l7-7m0 0l7 7m-7-7v18"
    //               }
    //             ></path>
    //           </svg>
    //         </button>
    //         <p
    //           className={
    //             activeQuestions && activeQuestions.includes("three")
    //               ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //               : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
    //           }
    //           data-id="three"
    //         >
    //           <Chunk contentKey="tab_one_question_three_content" />
    //         </p>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default GeneralPanelContent;
