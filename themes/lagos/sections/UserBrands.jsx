import {
  CustomChunkCollection,
  useCollectionChunks,
  ChunkFieldValue,
  CollectionItemWrapper,
  Chunk,
} from "editmode-react";

export default function UserBrands() {
  const chunks = useCollectionChunks("col_KrxogBTFjqYS");
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
            <div className="max-w-md">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                <Chunk identifier="cnk_88e356621b7bbd640f07" />
              </h2>
              <p className="text-gray-500 leading-loose">
                <Chunk identifier="cnk_cdb1532a6594b0f887ab" />
              </p>
            </div>
          </div>
          <CustomChunkCollection
            identifier="col_KrxogBTFjqYS"
            className="w-full lg:w-1/2 flex flex-wrap -mx-2"
            chunks={chunks}
          >
            {chunks.map((chunk, idx) => (
              <CollectionItemWrapper
                className={
                  idx === chunks.length - 1
                    ? "w-full lg:w-1/3 px-2"
                    : "mb-4 w-full lg:w-1/3 px-2"
                }
                chunk={chunk}
              >
                <div className="py-16 bg-gray-50 rounded">
                  <ChunkFieldValue
                    className="mx-auto h-6"
                    identifier="fld_wNjHMTcUj9h0"
                  />
                </div>
              </CollectionItemWrapper>
            ))}
          </CustomChunkCollection>
        </div>
      </div>
    </section>
  );
}
