import { Editmode } from "editmode-react";
function EditmodeWrapper({ children }) {
  return (
    <>
      <Editmode
        projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
        defaultChunks={chunks}
      >
        {children}
      </Editmode>
    </>
  );
}

export default EditmodeWrapper;
