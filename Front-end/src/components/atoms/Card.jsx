const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-lg border-[1px] border-mercury bg-white overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
