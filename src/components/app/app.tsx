// import './App.scss';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { AppRoute } from '../../const';
import Blog from '../../pages/blog/blog';
import Faq from '../../pages/faq/faq';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import Pricing from '../../pages/pricing/pricing';
import Products from '../../pages/products/products';
import SignIn from '../../pages/sign-in/sign-in';
import SignUp from '../../pages/sign-up/sign-up';


function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path={AppRoute.Main}
                    element={<Main />}
                />
                <Route
                    path={AppRoute.Products}
                    element={<Products />}
                />
                  <Route
                    path={AppRoute.Pricing}
                    element={<Pricing />}
                />
                <Route
                    path={AppRoute.FAQ}
                    element={<Faq />}
                /><Route
                    path={AppRoute.Blog}
                    element={<Blog />}
                />
                <Route
                    path={AppRoute.SignIn}
                    element={<SignIn />}
                />
                <Route
                    path={AppRoute.SignUp}
                    element={<SignUp />}
                />
                <Route
                    path={AppRoute.Error}
                    element={<NotFound />}
                />
            </>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;