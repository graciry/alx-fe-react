import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with real authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
