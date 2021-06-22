import { Chunk } from "editmode-react";
import handleClick from "../utils/handleClick";
import { useState } from "react";

const PaymentsPanelContent = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <ul>
          <li className="py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id={"one"}
              onClick={(e) =>
                handleClick(e, activeQuestions, setActiveQuestions)
              }
            >
              <span className="text-xl">
                <Chunk identifier="cnk_047459fe89c7b8386c69" />
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
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("one")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
            >
              <Chunk identifier="cnk_8fe37fa427c3f98c4645" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id={"two"}
              onClick={(e) =>
                handleClick(e, activeQuestions, setActiveQuestions)
              }
            >
              <span className="text-xl">
                <Chunk identifier="cnk_26161bd4690855c32796" />
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("two")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
            >
              <Chunk identifier="cnk_2ce8ecd65c6a4ae0f260" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id={"three"}
              onClick={(e) =>
                handleClick(e, activeQuestions, setActiveQuestions)
              }
            >
              <span className="text-xl">
                <Chunk identifier="cnk_e8a7020f34ce9a09c74f" />
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("three")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
            >
              <Chunk identifier="cnk_c20f1e796504a2b4efc2" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentsPanelContent;
