import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // TODO : Réaliser la not-found page avec errorElement
    }
])

export default router;