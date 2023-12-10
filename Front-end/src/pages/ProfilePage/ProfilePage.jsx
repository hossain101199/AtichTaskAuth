import Container from "../../components/atoms/Container";
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
        <Container className="flex justify-center">
          <div className="flex flex-col gap-5 w-full md:w-[672px]">
            <UpdateProfile profile={profile} />
            <ChangePassword />
          </div>
        </Container>
      )}
    </>
  );
};

export default Profile;
