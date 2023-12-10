import OfflineIcon from "../../assets/svgs/OfflineIcon";
import useOnlineStatus from "../../hooks/useOnlineStatus";

const OfflineAlert = () => {
  const isOnline = useOnlineStatus();

  return (
    !isOnline && (
      <div className="flex items-center justify-center p-3 text-sm text-red-800 bg-red-50 gap-3">
        <OfflineIcon />
        <span>You&apos;re currently offline</span>
      </div>
    )
  );
};

export default OfflineAlert;
