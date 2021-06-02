import { Chunk } from "editmode-react";
import { useState, useEffect } from "react";

const GeneralPanelContent = () => {
  const [activeQuestions, setActiveQuestions] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      Array.isArray(activeQuestions) &&
      activeQuestions.includes(e.currentTarget.dataset.id)
    ) {
      const newList = activeQuestions?.filter(
        (item) => item !== e.currentTarget.dataset.id
      );
      return setActiveQuestions(newList);
    } else if (
      Array.isArray(activeQuestions) &&
      !activeQuestions.includes(e.currentTarget.dataset.id)
    ) {
      return setActiveQuestions([
        ...activeQuestions,
        e.currentTarget.dataset.id,
      ]);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <ul>
          <li className="py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id={"one"}
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_4b6e8a21e9d79d33fc15" />
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
                  d={
                    activeQuestions.includes("one")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
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
              <Chunk identifier="cnk_950032e19f2560371652" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id="two"
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_e26a87736713ae3a4b97" />
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
                  d={
                    activeQuestions.includes("two")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
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
              <Chunk identifier="cnk_983e534d957f4f680660" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id="three"
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_31b2a55e5ec11e6fb878" />
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
                  d={
                    activeQuestions.includes("three")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("three")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
              data-id="three"
            >
              <Chunk identifier="cnk_449c3c251ba6b0946b90" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id="four"
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_00120b81971100b90465" />
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
                  d={
                    activeQuestions.includes("four")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("four")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
              data-id="four"
            >
              <Chunk identifier="cnk_c9cd61d92ad8a41f1f32" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id="five"
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_8b5a4dc10655ca1863af" />
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
                  d={
                    activeQuestions.includes("five")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("five")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
              data-id="five"
            >
              <Chunk identifier="cnk_d19c04c7537f0d805cd1" />
            </p>
          </li>
          <li className="py-6 lg:py-12 pr-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600"
              data-id="six"
              onClick={handleClick}
            >
              <span className="text-xl">
                <Chunk identifier="cnk_e75c2f1e3f7ce834a765" />
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
                  d={
                    activeQuestions.includes("six")
                      ? "M19 14l-7 7m0 0l-7-7m7 7V3"
                      : "M5 10l7-7m0 0l7 7m-7-7v18"
                  }
                ></path>
              </svg>
            </button>
            <p
              className={
                activeQuestions && activeQuestions.includes("six")
                  ? "mt-4 pr-4 text-gray-400 font-normal leading-loose"
                  : "hidden mt-4 pr-4 text-gray-400 font-normal leading-loose"
              }
            >
              <Chunk identifier="cnk_3a2f94eb5062011aa9a4" />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GeneralPanelContent;
