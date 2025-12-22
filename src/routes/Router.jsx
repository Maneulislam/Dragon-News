import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Category from "../components/Category";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "../Private Routes/PrivateRoutes";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch('/public/news.json'),
                hydrateFallbackElement: <Loading></Loading>

            },
        ],
    },

    {
        path: "/auth",
        Component: AuthLayout,
        children: [

            {
                path: "/auth/login",
                Component: Login


            },
            {
                path: "/auth/register",
                Component: Register


            },
        ],
    },

    {
        path: "/news-details/:id",
        element: <PrivateRoutes>
            <NewsDetails>

            </NewsDetails>
        </PrivateRoutes>,
        loader: () => fetch('/public/news.json'),
        hydrateFallbackElement: <Loading></Loading>

    },




]);

export default router;
