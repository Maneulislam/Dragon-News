import { createBrowserRouter } from "react-router";
import Home from "../components/Navbar";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            // { index: true, Component: Home },
            // { path: "settings", Component: Settings },
        ],
    },
]);

export default router;
