import { ChunkCollection, ChunkFieldValue } from "editmode-react";
import { useState } from "react";

const FaqTabs = () => {
  const [openTab, setOpenTab] = useState(0);

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <ChunkCollection
          identifier="faqs"
          tags={["faq_general"]}
        >
          {(getChunk, chunk, index) => (
            <button 
              className="flex w-full text-left mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl cursor-pointer" 
              onClick={() => setOpenTab(index)}
            >
              <div className="w-auto mr-8">
                <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                  {index + 1}
                </span>
              </div>
              <div className="w-full mt-3">
                <div className="flex items-center justify-between">
                  <h3 class="text-xl font-bold">
                    <ChunkFieldValue identifier="Question"/>
                  </h3>
                  <span class={index == openTab ? "rotate-180 ml-4 transform" : "ml-4 transform"} >
                    <svg class="w-4 h-4" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z" fill="#1F40FF"></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6 border-l-2 border-gray-50 pl-10">
                  <p className={index == openTab ? "mt-4 pr-4 text-gray-400 font-normal leading-loose" : "hidden"}>
                    <ChunkFieldValue identifier="Answer" /> 
                  </p>
                </div>
              </div>
            </button>
          )}
        </ChunkCollection>
      </div>
    </div>
  );
};

export default FaqTabs;
