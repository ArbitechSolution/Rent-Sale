import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchTab from "./components/Tabs";
import Buy from "./components/Buy";
import FindCities from "./components/FindCities";
import WelcomeNote from "./components/WelcomeNote";
import AdminHeader from "./components/AdminHeader";
import DataFetch from "./components/DataFetch";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
      {/* <FileUpload /> */}
      {/* <DataFetch /> */}
      {/* <div className=" main-container " fluid>
        <div className="firstDiv">
          <NavBar />
          <SearchTab />
        </div>
        <FindCities />
        <WelcomeNote />
        <Footer />
      </div> */}

      <div className="container-fluid">
        <AdminHeader />
      </div>
    </>
  );
}

export default App;
