const XLHeading = ({ className = "", children = null }) => {
  return (
    <h2
      className={`text-[24px] md:text-[36px] lg:text-[40px] xl:text-[58px] font-bold text-darkblue ${className}`}
    >
      {children}
    </h2>
  );
};

export default XLHeading;
