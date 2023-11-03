const XLParagraph = ({ children, className = "font-normal" }) => {
  return <p className={`text-xl ${className}`}>{children}</p>;
};

export default XLParagraph;
