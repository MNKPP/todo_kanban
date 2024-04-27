import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
              path: "/home-page",
              element: <HomePage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
            {
                path: "/dashboard",
                element: (
                    <ProtectedRoute element={<Dashboard />} />
                ),
            },
        ]
    },
])

export default router;