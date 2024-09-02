import { createBrowserRouter } from "react-router-dom";
import { AuthRoot, Root, UserTest } from "./App";
import Error404 from "./pages/error/404";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/changePassword";
import ForgotPassword from "./pages/auth/forgotPassword";
import Registration from "./pages/auth/registrion";
import Dashboard from "./pages/dashboard";
import Instructors from "./pages/instructor";
import Performance from "./pages/performance";
import LeadBoard from "./pages/Leadboard";
import Nahw from "./pages/courses/nahw";
import Test from "./pages/test";
import Verification from "./pages/auth/verification";

export const Router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthRoot />,
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
                path: "verification",
                element: <Verification />,
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
        path: "/test",
        element: <UserTest />,
        errorElement: <Error404 />,
        children: [
            {
                path: "user-test",
                element: <Test />,
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
                element: <Dashboard />,
            },
            {
                path: "instructor",
                element: <Instructors />,
            },
            {
                path: "performance",
                element: <Performance />,
            },
            {
                path: "lead-board",
                element: <LeadBoard />,
            },
            {
                path: "courses",
                children: [
                    {
                        path: 'nahw',
                        element: <Nahw />
                    }
                ]
            },
        ],
    },
    {
        path: "*", // Catch-all for undefined routes
        element: <Error404 />,
    },
]);
