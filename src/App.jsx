import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";

function AuthRoot() {
  const {isAuthenticated} = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/" />; // Redirect authenticated users to the dashboard
  }

  return <Outlet />;
}

function UserTest() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />; // Redirect if not logged in
  }

  if (user) {
    return <Navigate to="/" />; // Redirect to dashboard if the test has been taken
  }

  return <Outlet />;
}

function Root() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />; // Redirect if not logged in
  }

  if (isAuthenticated && !user) {
    return <Navigate to="/test/user-test" />; // Redirect to the test page if logged in but hasn't taken the test
  }

  return (
    <div className="gap-10 dash h-screen bg-no-repeat bg-cover bg-center p-4 flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Dashboard */}
      <main className="flex-grow rounded-xl border border-gray-300 bg-glass w-[55.188rem] h-">
        <Outlet />
      </main>
    </div>
  );
}

export { Root, AuthRoot, UserTest };
