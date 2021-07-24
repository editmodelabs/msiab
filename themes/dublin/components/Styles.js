import { useGetChunk } from "editmode-react";

const Styles = () => {
  const primaryColor = useGetChunk("primary_color");
  const font = useGetChunk("google_font_family_name");
  return (
    <style global jsx>
      {`
        body,
        em-span {
          font-family: ${font};
        }
        .text-primary {
          color: ${primaryColor};
        }
        .bg-primary {
          background-color: ${primaryColor};
        }
        .bg-primary-100 {
          background-color: ${primaryColor}10;
        }
        .border-primary {
          border-color: ${primaryColor};
        }
      `}
    </style>
  );
};

export default Styles;
