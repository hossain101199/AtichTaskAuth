const LHeading = ({ className = "", children = null }) => {
  return (
    <h3
      className={`text-[24px] lg:text-[36px] xl:text-[40px] font-bold text-darkblue ${className}`}
    >
      {children}
    </h3>
  );
};

export default LHeading;
