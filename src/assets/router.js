import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Error from '../Components/Error'
import Shop from "../Components/Shop";
import PalestineShop from "../Components/PalestineShop";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error/>
    },
    {
        path: 'shop',
        element: <Shop />
    },
    {
        path: 'palestineshop',
        element: <PalestineShop />
    }
]);

export default router;