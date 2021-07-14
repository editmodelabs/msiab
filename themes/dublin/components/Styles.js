import {useGetChunk} from 'editmode-react'

const Styles = () => {
  const primaryColor = useGetChunk("primary_color")
  const font = useGetChunk('google_font_family')
  const fontStyle = font ? `@import url('https://fonts.googleapis.com/css2?family=${font}&display=swap');` : '';
  return (
    <style global jsx>
      {`
        ${fontStyle}
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
