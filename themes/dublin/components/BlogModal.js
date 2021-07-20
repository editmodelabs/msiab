const BlogModal = (props) => {
  const {image, published_at, title, body, handleClick} = props;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 p-10 flex flex-col items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded shadow p-16 overflow-y-auto w-full md:w-2/3 lg:w-2/3 relative">
        <div className="absolute top-0 right-0 m-3 cursor-pointer" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <img className="w-full h-128 object-cover object-top rounded" src={image} />
        <h5 className="font-bold text-5xl mt-6">
          {title}
        </h5>
        <span className="text-gray-400 text-xl font-bold">Published {published_at}</span>
        <p className="text-lg text-gray-400 w-full mt-8">
          {body}
        </p>
      </div>

    </div>
  );
};

export default BlogModal;
