import {  Outlet } from "react-router-dom";
// import { useAuthCtx } from "./context/authContext";

function AnonymousRoot() {
  return <Outlet />;
}

function Root() {
  // const { isAuthenticated } = useAuthCtx();

  // if (!isAuthenticated) {
  //   return <Navigate to="/auth/login" replace />;
  // }

  return <Outlet />;
}

export { Root, AnonymousRoot };
