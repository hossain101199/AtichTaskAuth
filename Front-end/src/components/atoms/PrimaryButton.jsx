const PrimaryButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-action rounded-lg text-white font-semibold p-3 click-animation ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
