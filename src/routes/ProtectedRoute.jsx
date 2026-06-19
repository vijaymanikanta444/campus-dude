import { Navigate, Outlet } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import AuthLayout from "../components/AuthLayout/AuthLayout";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();

  return isAuthenticated ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
