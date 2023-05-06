import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    Outlet,
  } from "react-router-dom";
  
  import SideDrawer from "../components/side-drawer/side-drawer.jsx";
  import Home from "../pages/home/home.jsx";
  import MakePayment from "../pages/make-payment/payment-page.jsx";
  import SignIn from "../pages/signin/signin.jsx";
  import SignUp from "../pages/signup/signup.jsx";
  import History from "../pages/history/payment-history.jsx";
  
  let routeGuard = sessionStorage.getItem("loginStatus");
  const Layout = () => {
    if (routeGuard === "true") {
      return (
        <div>
            <SideDrawer/>
            <main>
               <Outlet />
          </main>
        </div>
      )
    }else{
      return (
        <>
        <SignIn/>
        </>
      )
    }
  };
  
  function AppRouter() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} /> 
              <Route path="make-payment" element={<MakePayment />} />
              <Route path="history" element={<History />} />
              
            </Route>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default AppRouter;