import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/auth";

export default function GuestRoute() {

  if (isAuthenticated()) {
    return (
      <Navigate
        to={isAdmin() ? "/admin" : "/"}
        replace
      />
    );
  }

  return <Outlet />;
}