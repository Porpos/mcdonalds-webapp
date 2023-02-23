import HomePageContent from "../components/HomePageContent";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
 
  return (
    <>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="home-container" >
          <HomePageContent></HomePageContent>
        </div>
      </div>
    </>
  );
};

export default HomePage;
