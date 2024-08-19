import { createBrowserRouter } from "react-router-dom";
import { AnonymousRoot, Root } from "./App";
import Error404 from "./pages/error/404";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/changePassword";
import ForgotPassword from "./pages/auth/forgotPassword";
import Registration from "./pages/auth/registrion";
// import Dashboard from "./pages/dashboard";

export const Router = createBrowserRouter([
    {
        path: "auth",
        element: <AnonymousRoot />,
        errorElement: <Error404 />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
            {
                path: "reset-password",
                element: <ResetPassword />,
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />,
            },
        ],
    },
    {
        path: "/",
        element: <Root />,
        errorElement: <Error404 />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: "*", // Catch-all for undefined routes
        element: <Error404 />,
    },
]);
