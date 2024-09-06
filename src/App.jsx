import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserFromCookies } from "./lib/reducer/authSlice";

function AuthRoot() {
  const { token } = useSelector((state) => state.auth);

  // Redirect authenticated users (with token) to the dashboard
  if (token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}


function UserTest() {
  const { token, user } = useSelector((state) => state.auth);

  // Redirect if not logged in (no token)
  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  // If the user has completed the evaluation test, redirect to dashboard
  if (user && user.eval_test) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}


function Root() {
  const { token, user } = useSelector((state) => state.auth); // Only token and user now
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const dispatch = useDispatch();

  // Load user info from cookies when the component mounts
  useEffect(() => {
    if (!token) {
      dispatch(loadUserFromCookies()); // Load token & user if not already loaded
    }
  }, [token, dispatch]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // If token is not available, redirect to login
  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  // If token is available and user.eval_test is false, redirect to the test page
  if (token && user && user.eval_test === false) {
    return <Navigate to="/test/user-test" />;
  }

  // If token is available and user.eval_test is true, redirect to the dashboard
  if (token && user && user.eval_test === true) {
    return <Navigate to="/" />;
  }

  return (
    <div className="gap-10 dash h-screen bg-no-repeat bg-cover bg-center p-4 flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Dashboard */}
      <main className="flex-grow rounded-xl border border-gray-300 bg-glass w-[55.188rem]">
        <Outlet />
      </main>
    </div>
  );
}


export { Root, AuthRoot, UserTest };
