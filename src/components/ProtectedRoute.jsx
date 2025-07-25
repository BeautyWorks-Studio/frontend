import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();

  if (!user || (requiredRole && user.role !== requiredRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
