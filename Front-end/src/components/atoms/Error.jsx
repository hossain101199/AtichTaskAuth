import InfoIcon from "../../assets/svgs/InfoIcon";

const Error = ({ error }) => {
  return (
    <div
      className="flex items-center p-3 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
      role="alert"
    >
      <InfoIcon />
      <span className="sr-only">Info</span>
      <div className="font-medium">{error}</div>
    </div>
  );
};

export default Error;
