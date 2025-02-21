import IHCIConference from "../IHCIConference";
import RegistrationTable from "../Registration";
import CallForSponsors from "../CallSponsers";
import HomeInfo from "../HomeInfo";
const Home = () => {
  return (
    <>
      <IHCIConference />
      <HomeInfo />
      <RegistrationTable />
      <CallForSponsors />
    </>
  );
};

export default Home;
