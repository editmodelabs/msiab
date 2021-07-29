import {useState} from "react";
import BlogModal from "./BlogModal";
import {ChunkFieldValue} from "editmode-react";

const BlogPost = (props) => {
  const {getChunk, chunk} = props;
  const [openModal, setOpenModal] = useState(false)

  function handleClick(e) {
    e.preventDefault()
    setOpenModal(!openModal)
  }

  return (
    <div className="w-full h-full cursor-pointer" onClick={handleClick}>
      <div className="relative h-56">
        <img className="w-full h-full object-cover object-top rounded-t" src={getChunk(chunk, "Image")} />
        <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-primary">
          <p className="text-xs uppercase text-gray-300">
            {getChunk(chunk, "Published At")}
          </p>
        </div>
      </div>
      <div className="pt-10 pb-14 px-5 h-64 bg-white rounded-b-lg">
        <span className="inline-block mb-6 py-1 px-3 text-white font-bold rounded-xl bg-primary uppercase">
          {getChunk(chunk, "Category")}
        </span>
        <h3 className="mb-4 text-2xl font-bold truncate">
          {getChunk(chunk, "Title")}
        </h3>
        <div className="text-lg text-gray-300 w-full truncate blog-post-body">
          <ChunkFieldValue identifier="Body"/>
        </div>
      </div>
      {openModal && (
        <BlogModal 
          image={getChunk(chunk, "Image")} 
          published_at={getChunk(chunk, "Published At")}
          title={getChunk(chunk, "Title")} 
          body={<ChunkFieldValue identifier="Body"/>} 
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default BlogPost;
