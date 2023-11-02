const UploadIcon = ({ height = 22, width = 22, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.38948 7.98452H5.45648C3.42148 7.98452 1.77148 9.63452 1.77148 11.6695L1.77148 16.5445C1.77148 18.5785 3.42148 20.2285 5.45648 20.2285H16.5865C18.6215 20.2285 20.2715 18.5785 20.2715 16.5445V11.6595C20.2715 9.63052 18.6265 7.98452 16.5975 7.98452L15.6545 7.98452"
        stroke="#353945"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0215 1.19142V13.2324"
        stroke="#353945"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.10547 4.11914L11.0205 1.19114L13.9365 4.11914"
        stroke="#353945"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UploadIcon;
