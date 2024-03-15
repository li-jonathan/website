import React from "react";

const Logo = ({ className }) => {
  return (
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
    >
      <path
        fill="#facc15"
        id="Layer 1"
        d="m0 40c0-22.1 17.9-40 40-40h320c22.1 0 40 17.9 40 40v320c0 22.1-17.9 40-40 40h-320c-22.1 0-40-17.9-40-40z"
      />
      <path
        id="J"
        fill="#171717"
        aria-label="J"
        d="m201.3 304.9q-32.1 0-49.3-13.9-17.2-13.9-22.9-45l42.9-6.3q2.7 16 9.8 23.8 7.2 7.6 19.8 7.6 12.9 0 19.5-8.7 6.7-8.6 6.7-24.7v-108.3h-41.1v-33.8h84.2v141.1q0 32.2-18.3 50.2-18.3 18-51.3 18z"
      />
    </svg>
  );
};

export default Logo;
