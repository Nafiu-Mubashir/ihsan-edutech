import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
import {
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { Bell, MagnifyingGlass } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

function AuthRoot() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" />; // Redirect authenticated users to the dashboard
  }

  return <Outlet />;
}

function UserTest() {
  const { isAuthenticated, hasTakenTest } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />; // Redirect if not logged in
  }

  if (hasTakenTest) {
    return <Navigate to="/" />; // Redirect to dashboard if the test has been taken
  }

  return <Outlet />;
}

function Root() {
  const { isAuthenticated, hasTakenTest } = useSelector((state) => state.auth);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />; // Redirect if not logged in
  }

  if (isAuthenticated && !hasTakenTest) {
    return <Navigate to="/test/user-test" />; // Redirect to the test page if logged in but hasn't taken the test
  }

  return (
    <div className="gap-10 dash h-screen bg-no-repeat bg-cover bg-center p-10 flex">
      {/* Sidebar */}
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Dashboard */}
      <main className="flex-grow rounded-xl border border-gray-300 bg-glass w-[55.188rem]">
        <div className="bg-ihsan border-none rounded-t-xl p-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Avatar src="" name="I hsan" />
            <h2 className="uppercase font-bold text-white">IHSAN</h2>
          </div>

          <div>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <MagnifyingGlass
                  size={16}
                  color="white"
                  className="mt-[-5px]"
                />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="search text"
                size={"sm"}
                width={"21rem"}
                borderRadius={"100"}
                className="!bg-ihsan placeholder:text-white text-white focus:!border-white focus:!ring-0 focus:!outline-none"
              />
            </InputGroup>
          </div>

          <div className="flex items-center gap-1">
            <div>
              <Bell size={26} color="white" />
            </div>
            <Menu className="!z-20">
              <MenuButton>
                <Avatar src="" name="Abbass Abdulmujeeb" />
              </MenuButton>
              <MenuList sx={{ bg: "!bg-ihsan" }}>
                <MenuItem
                  sx={{ bg: "!bg-ihsan" }}
                  className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                >
                  Download
                </MenuItem>
                <MenuItem
                  sx={{ bg: "!bg-ihsan" }}
                  className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                >
                  Create a Copy
                </MenuItem>
                <MenuItem
                  sx={{ bg: "!bg-ihsan" }}
                  className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                >
                  Mark as Draft
                </MenuItem>
                <MenuItem
                  sx={{ bg: "!bg-ihsan" }}
                  className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                >
                  Delete
                </MenuItem>
                <MenuItem
                  sx={{ bg: "!bg-ihsan" }}
                  className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                >
                  Attend a Workshop
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export { Root, AuthRoot, UserTest };
