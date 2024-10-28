import React from "react";

const ArrowUpSvg = ({width}) => {
    width = width === undefined? 'auto':width
  return (
    <svg
      width={width}
      height={'auto'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 7L12 3M12 3L16 7M12 3V15"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowUpSvg;