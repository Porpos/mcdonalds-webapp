import HomePageContent from "../components/HomePageContent";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Sidebar></Sidebar>
        <HomePageContent></HomePageContent>
      </div>
    </>
  );
};

export default HomePage;
