import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import MyReviews from "../../Pages/Reviews/MyReviews/MyReviews";
import UpdateReview from "../../Pages/Reviews/UpdateReview/UpdateReview";
import AddService from "../../Pages/Services/AddService/AddService";
import ServiceDetails from "../../Pages/Services/Services/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/addService', element: <PrivateRoute><AddService></AddService></PrivateRoute> },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            { path: '/myReviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute> },
            {
                path: '/reviews/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },
            { path: '/blogs', element: <Blogs></Blogs> },
        ]
    },
    { path: '/signin', element: <SignIn></SignIn> },
    { path: '/signup', element: <SignUp></SignUp> },
])