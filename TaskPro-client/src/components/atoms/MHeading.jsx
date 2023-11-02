const MHeading = ({ className = "", children = null }) => {
  return (
    <h4
      className={`text-[24px] sm:text-[36px] font-bold text-darkblue ${className}`}
    >
      {children}
    </h4>
  );
};

export default MHeading;
