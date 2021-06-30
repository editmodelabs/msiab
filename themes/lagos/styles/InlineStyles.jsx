import React from 'react'
import { useGetChunk, useEffect} from 'editmode-react'

export default function InlineStyles() {
  const primaryColor = useGetChunk("primary_color")
  const font = useGetChunk('google_font_family')
  return (
    <style global jsx>
      {`
        @import url('https://fonts.googleapis.com/css2?family=${font}&display=swap');
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
  )
}