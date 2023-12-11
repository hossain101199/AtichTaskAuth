import UploadIcon from "../../assets/svgs/UploadIcon";
import truncate from "../../utils/truncate";

const FileUpload = ({ handlePicture, document, documentError }) => {
  return (
    <div>
      <label className="flex justify-center items-center border-2 border-dashed rounded-lg cursor-pointer hover:border-gray-400 focus:outline-none p-4 h-20">
        <div className="w-full text-center">
          {document ? (
            <p className="text-sm font-medium">{truncate(document.name)}</p>
          ) : (
            <>
              <UploadIcon className="mx-auto" width={24} height={24} />
              <span className="text-sm font-medium text-slategray">
                Upload a profile picture
              </span>
            </>
          )}
        </div>
        <input
          name="profileImg"
          className="hidden"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handlePicture(e.target.files[0])}
        />
      </label>
      {documentError ? (
        <p className="error text-start text-red-600">{documentError}</p>
      ) : null}
    </div>
  );
};

export default FileUpload;
