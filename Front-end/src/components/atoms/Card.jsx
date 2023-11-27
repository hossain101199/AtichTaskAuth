const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-[10px] border-[1px] border-mercury bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
