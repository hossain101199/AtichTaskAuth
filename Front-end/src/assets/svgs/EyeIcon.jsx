const EyeIcon = ({ height = 16, width = 17, className = "" }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox={`0 0 ${height} ${width}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3712 7.03996C10.3712 8.34946 9.30916 9.41071 7.99966 9.41071C6.69016 9.41071 5.62891 8.34946 5.62891 7.03996C5.62891 5.72971 6.69016 4.66846 7.99966 4.66846C9.30916 4.66846 10.3712 5.72971 10.3712 7.03996Z"
        stroke="#23262F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9985 12.5162C10.8545 12.5162 13.4668 10.4627 14.9375 7.03973C13.4668 3.61673 10.8545 1.56323 7.9985 1.56323H8.0015C5.1455 1.56323 2.53325 3.61673 1.0625 7.03973C2.53325 10.4627 5.1455 12.5162 8.0015 12.5162H7.9985Z"
        stroke="#23262F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
