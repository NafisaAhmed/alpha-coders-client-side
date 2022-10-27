import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckoutPage from "../Pages/Courses/Courses/CheckoutPage/CheckoutPage";
import CourseDetails from "../Pages/Courses/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])