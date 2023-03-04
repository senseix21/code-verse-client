import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import About from '../Pages/About/About';
import Blog from '../Pages/Blog/Blog';
import Category from '../Pages/Category/Category';
import Course from '../Pages/Course/Course';
import DisplayCategories from '../Pages/Home/DisplayCategories';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import Terms from '../Pages/Terms/Terms';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:
            [
                {
                    path: '/', element: <Home></Home>,
                    loader: async () => {
                        return fetch(`https://code-verse-server.vercel.app/course`);

                    }
                },
                { path: '/', element: <Home></Home> },
                {
                    path: '/category/', element: <DisplayCategories></DisplayCategories>,
                    loader: async ({ params }) => {
                        return fetch(`https://code-verse-server.vercel.app/category/`);

                    }
                },

                {
                    path: '/courses/:id', element: <PrivateRoute> <Category></Category></PrivateRoute>,
                    loader: async ({ params }) => {
                        console.log(params);
                        return fetch(`https://code-verse-server.vercel.app/category/${params.id}`)
                    }
                },

                {
                    path: '/course/:id',
                    element: <PrivateRoute><Course></Course></PrivateRoute>,
                    loader: async ({ params }) => {
                        return fetch(`https://code-verse-server.vercel.app/course/${params.id}`);
                    }
                },
                { path: '/about', element: <About></About> },
                { path: '/blog', element: <Blog></Blog> },
                { path: '/terms', element: <Terms></Terms> },
                { path: 'signin', element: <SignIn></SignIn> },
                { path: '/signup', element: <SignUp></SignUp> },
                { path: '*', element: <NotFound></NotFound> }
            ]
    }
]);