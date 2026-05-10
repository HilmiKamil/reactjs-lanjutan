import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/auth";

export default function ProtectedRoute({ adminOnly = false }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}