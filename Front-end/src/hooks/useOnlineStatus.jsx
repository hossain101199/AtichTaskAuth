import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineOrOfflineStatus = (event) => {
      if (event.type === "online") {
        setIsOnline(true);
      } else if (event.type === "offline") {
        setIsOnline(false);
      }
    };

    window.addEventListener("online", handleOnlineOrOfflineStatus);
    window.addEventListener("offline", handleOnlineOrOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineOrOfflineStatus);
      window.removeEventListener("offline", handleOnlineOrOfflineStatus);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
