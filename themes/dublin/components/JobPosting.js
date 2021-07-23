import {useState} from "react";
import {ChunkFieldValue} from "editmode-react";

const JobPosting = () => {
  const [showJobDescription, setShowJobDescription] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setShowJobDescription(!showJobDescription)
  }

  return (
    <div className="block hover:bg-gray-50 cursor-pointer" onClick={handleClick}>
      <div className="py-4">
        <div className="flex items-center justify-between px-4 sm:px-6">
          <p className="font-medium text-primary truncate text-xl">
            <ChunkFieldValue identifier="Role" />
          </p>
          <div className="ml-2 flex-shrink-0 flex">
            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              <ChunkFieldValue identifier="Job Type" />
            </p>
          </div>
        </div>
        <div className="mt-2 sm:flex sm:justify-between px-4 sm:px-6">
          <div className="sm:flex">
            <p className="flex items-center text-sm text-gray-400">
              <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
                <ChunkFieldValue identifier="Team" />
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0 sm:ml-6">
              <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <ChunkFieldValue identifier="Location" />
            </p>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-400 sm:mt-0">
            <svg className="flex-shrink-0 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="pt-1">
              Closing on
              <ChunkFieldValue identifier="Application Closing Date" className="ml-1"/>
            </p>
          </div>
        </div>
        {showJobDescription && (
          <div className="mt-8 pt-12 pb-8 border-t border-gray-200 px-4 sm:px-6">
            <ChunkFieldValue identifier="Job Description" className="prose"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobPosting;
