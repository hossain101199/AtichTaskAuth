const Paragraph = ({ children, className = "font-normal" }) => {
  return <p className={`text-base ${className}`}>{children}</p>;
};

export default Paragraph;
