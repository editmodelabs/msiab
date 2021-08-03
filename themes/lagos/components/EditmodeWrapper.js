import { Editmode } from "editmode-react";
function EditmodeWrapper({ children }) {
  return (
    <>
      <Editmode projectId="prj_gaf3K12dTGwe" defaultChunks={chunks}>
        {children}
      </Editmode>
    </>
  );
}

export default EditmodeWrapper;
