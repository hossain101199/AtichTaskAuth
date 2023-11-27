import Spinner from "@/components/atoms/Spinner";
import ChangePassword from "@/components/molecules/ChangePassword";
import UpdateProfile from "@/components/molecules/UpdateProfile";
import RootLayout from "@/layout/RootLayout";
import { useGetProfileQuery } from "@/redux/features/profile/profileAPI";

const Profile = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-5 lg:items-center">
          <UpdateProfile profile={profile} />
          <ChangePassword />
        </div>
      )}
    </>
  );
};

Profile.getLayout = function getLayout(page) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

export default Profile;
