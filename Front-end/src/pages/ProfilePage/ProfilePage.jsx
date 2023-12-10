import Spinner from "../../components/atoms/Spinner";
import ChangePassword from "../../components/molecules/ChangePassword";
import UpdateProfile from "../../components/molecules/UpdateProfile";
import { useGetProfileQuery } from "../../redux/features/profile/profileAPI";

const Profile = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col gap-5 lg:w-[672px]">
            <UpdateProfile profile={profile} />
            <ChangePassword />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
