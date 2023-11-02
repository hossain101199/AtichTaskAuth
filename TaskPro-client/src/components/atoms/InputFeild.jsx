import EyeIcon from "@/assets/svgs/EyeIcon";
import HideIcon from "@/assets/svgs/HideIcon";

const InputField = ({
  placeholder = "",
  name = "",
  type = "",
  error = "",
  showIcon = false,
  showPassword = Boolean,
  setShowPassword,
}) => {
  return (
    <div className="mb-5">
      <div className="flex rounded-lg py-3 px-3 w-full bg-ghostwhite">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="outline-0 mx-2 w-full text-sm font-medium bg-ghostwhite placeholder:text-slategray"
        />

        {showIcon &&
          (showPassword ? (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <EyeIcon className="w-4 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
            >
              <HideIcon className="w-4 h-5" />
            </button>
          ))}
      </div>

      {error ? (
        <div className="error text-start text-red-600">{error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
