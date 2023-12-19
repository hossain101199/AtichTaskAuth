import { useField } from "formik";
import EyeIcon from "../../assets/svgs/EyeIcon";
import HideIcon from "../../assets/svgs/HideIcon";

const InputField = ({
  showIcon = false,
  showPassword = Boolean,
  setShowPassword,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      <div className="flex rounded-lg p-3 w-full bg-ghostwhite">
        <input
          className="outline-none border-none w-full text-sm font-medium bg-ghostwhite placeholder:text-slategray"
          autoComplete="true"
          {...field}
          {...props}
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

      {meta.touched && meta.error ? (
        <p className="error text-start text-red-600">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
