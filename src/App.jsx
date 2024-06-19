import Home from "./routes/WebRoutes/Home";
import About from "./routes/WebRoutes/About";
import NotFound from "./routes/ErrorRoutes/NotFound";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import Terms from "./routes/WebRoutes/Terms";
import ValidateUser from "./routes/UserRoutes/ValidateUser";
import Payment from "./routes/PaymentRoutes/Payment";
import Support from "./routes/UserRoutes/Support";
import Profile from "./routes/UserRoutes/Profile";
import Loading from "./routes/WebRoutes/Loading";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLogged } from "./redux/tokenSlice";
import { useState } from "react";
import { profile } from "./api/user";
import ResetPassword from "./routes/UserRoutes/ResetPassword";
import PassUpdated from "./routes/UserRoutes/PassUpdated";

const LoggedRoutes = () => {
  const isUserLogged = useSelector(selectLogged);

  return isUserLogged ? <Outlet /> : <NotFound />;
};

const NotLoggedRoutes = () => {
  const isUserLogged = useSelector(selectLogged);

  return !isUserLogged ? <Outlet /> : <NotFound />;
};

const InactiveUserRoutes = () => {
  const [isWaiting , setIsWaiting] = useState(true);
  const [isInactive , setIsInactive] = useState(true);

  profile()
   .then(() => setIsInactive(false))
    .catch(() => setIsInactive(true))
    .finally(() => setIsWaiting(false));

  return isWaiting ? <Loading /> : isInactive ? <Outlet /> : <NotFound />;
};

const ActiveUserRoutes = () => {
  const [isWaiting , setIsWaiting] = useState(true);
  const [isActive, setIsActive] = useState(false);

  profile()
    .then(() => setIsActive(true))
    .catch(() => setIsActive(false))
    .finally(() => setIsWaiting(false));

  return isWaiting ? <Loading /> : isActive ? <Outlet /> : <NotFound />;
};

export function App() {
    return(
        <>
        <BrowserRouter>
          <ErrorBoundary>
            <Routes>
            
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="terms" element={<Terms />} />

              <Route element={<NotLoggedRoutes />} >

                <Route path="reset-password/:token" element={<ResetPassword />} />
                <Route path="pass-updated" element={<PassUpdated />} />

              </Route>
            
              <Route element={<LoggedRoutes />} >

                <Route element={<InactiveUserRoutes />} >
                  
                  <Route path="validate" element={<ValidateUser />} />

                </Route>

                <Route element={<ActiveUserRoutes />} >
                  
                  <Route path="payment-success" element={<Payment success={true} />} />
                  <Route path="payment-failed" element={<Payment success={false} />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="support" element={<Support />} />

                </Route>

              </Route>

            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
        </>
    )
}