import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Error from './Components/Error.jsx'
import Shop from './Components/Shop.jsx'
import PalestineShop from './Components/PalestineShop.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductPage from './Components/ProductPage.jsx'
import ContextProvider from './Components/Context.jsx'
import Cart from './Components/Cart.jsx'
import Favorites from './Components/Favorites.jsx'

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      errorElement: <Error/>
  },
  {
      path: 'shop',
      element: <Shop />,
  },
  {
      path: 'palestineshop',
      element: <PalestineShop />,
  },
  {
    path: 'palestineshop/:productName',
    element: <ProductPage />
  },
  {
    path: 'shop/:productName',
    element: <ProductPage />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/favorites',
    element: <Favorites />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)
