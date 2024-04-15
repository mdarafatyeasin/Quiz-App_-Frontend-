import { Route, Navigate } from 'react-router-dom';
import useUser from '../../Hooks/useUser';

const LoginRequaired = ({ element, ...rest }) => {
  const { user, loading } = useUser();

  if (loading) {
    // Loading state, show loading indicator or placeholder
    return null;
  }

  if (!user) {
    // User is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // User is authenticated, render the protected component
  return <Route {...rest} element={element} />;
};

export default LoginRequaired;
