const SParagraph = ({ children, className = "font-normal" }) => {
  return <p className={`text-sm ${className}`}>{children}</p>;
};

export default SParagraph;
