import IHCIConference from "../IHCIConference";
import NavbarMenu from "../NavbarMenu";
import RegistrationTable from "../Registration";
import CallForSponsors from "../CallSponsers";
import ContactUs from "../Contact";
const Home = () => {
  return (
    <>
      <NavbarMenu />
      <IHCIConference />
      <RegistrationTable />
      <CallForSponsors />
      <ContactUs />
    </>
  )
}

export default Home
