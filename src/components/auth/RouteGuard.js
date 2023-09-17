import { useLocation, Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();
  console.log(isLoggedIn);
  if (!isLoggedIn && location.pathname !== "/login") {
    console.log("test");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RouteGuard;
