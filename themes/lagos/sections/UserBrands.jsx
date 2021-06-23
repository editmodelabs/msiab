import {
  CustomChunkCollection,
  useCollectionChunks,
  ChunkFieldValue,
  CollectionItemWrapper,
  Chunk,
} from "editmode-react";

export default function UserBrands() {
  const chunks = useCollectionChunks("col_QoWb1ECjVYrn");
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 lg:mb-0 w-full lg:w-1/2">
            <div className="max-w-md">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
                <Chunk contentKey="brand_statement" />
              </h2>
              <p className="text-gray-500 leading-loose">
                <Chunk contentKey="brand_statement_desc" />
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
                key={chunk.identifier}
              >
                <div className="py-16 bg-gray-50 rounded">
                  <ChunkFieldValue
                    className="mx-auto h-6"
                    identifier="fld_tk5LkL0naTLG"
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
