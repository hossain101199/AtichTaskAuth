const LParagraph = ({ children, className = "font-normal" }) => {
  return <p className={`text-lg ${className}`}>{children}</p>;
};

export default LParagraph;
