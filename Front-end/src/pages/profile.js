import EditIcon from "@/assets/svgs/EditIcon";
import Card from "@/components/atoms/Card";
import LParagraph from "@/components/atoms/LParagraph";
import MHeading from "@/components/atoms/MHeading";
import Spinner from "@/components/atoms/Spinner";
import XLParagraph from "@/components/atoms/XLParagraph";
import ChangePassword from "@/components/molecules/ChangePassword";
import RootLayout from "@/layout/RootLayout";
import { useGetProfileQuery } from "@/redux/features/profile/profileAPI";
import Image from "next/image";

const Profile = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-5">
          <MHeading>My Profile</MHeading>
          <Card className="p-5 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <XLParagraph className="font-bold">
                PROFILE INFORMATION
              </XLParagraph>
              <button>
                <EditIcon />
              </button>
            </div>
            <div className="flex gap-10">
              {profile?.data?.profileImg && (
                <Image
                  className="h-20 w-20 rounded-full"
                  width={0}
                  height={0}
                  src={profile?.data?.profileImg}
                  alt=""
                />
              )}
              <LParagraph className="font-bold">
                {profile?.data?.name}
              </LParagraph>
            </div>
          </Card>
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
