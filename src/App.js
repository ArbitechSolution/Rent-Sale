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
import { Provider } from "react-redux";
import AdminPanel from "./Pages/Admin";
import store from "./store";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPanel from "./Pages/User";
import ProtectedRoute from "./utils/routes/protectedRoutes";
import PublicRoute from "./utils/routes/publicRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        {/* <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute component={AdminPanel} />
            // <ProtectedRoute>
            //   <UserPanel />
            // </ProtectedRoute>
          }
        /> */}
        <ProtectedRoute exact path="/dashboard" component={AdminPanel} />
        {/* <Route
          // exact
          path="/userPanel"
          element={<PublicRoute redirectTo="/login" component={UserPanel} />}
        /> */}
        {/* <ProtectedRoute exact path="/dashboard" component={AdminPanel} /> */}
        <PublicRoute exact path="/login" component={UserPanel} />
        <Route path="/" component={UserPanel} />
      </Switch>
    </BrowserRouter>
    // <>
    //   {/* <FileUpload /> */}
    //   {/* <DataFetch /> */}
    //   {/* <div className=" main-container " fluid>
    //     <div className="firstDiv">
    //       <NavBar />
    //       <SearchTab />
    //     </div>
    //     <FindCities />
    //     <WelcomeNote />
    //     <Footer />
    //   </div> */}

    //   <div className="container-fluid">
    //     <AdminHeader />
    //   </div>
    // </>
  );
}

export default App;
