import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export function PublicRoute() {
  const token = Cookies.get("authToken");

  return token ? <Navigate to="/dashboard" /> : <Outlet />;
}
