const PrimaryButton = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-action rounded-lg text-white font-semibold p-3 ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
