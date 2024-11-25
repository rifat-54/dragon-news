import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsPage from "../Pages/NewsPage";
import PrivateRoutes from "./PrivateRoutes";



const routes=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news/:id',
        element:<PrivateRoutes>
            <NewsPage></NewsPage>
        </PrivateRoutes>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/about',
        element:<h2>about page</h2>
    },
    {
        path:'/career',
        element:<h2>Career page</h2>
    },
    {
        path:'*',
        element:<h2>Error 404</h2>
    }
])


export default routes;