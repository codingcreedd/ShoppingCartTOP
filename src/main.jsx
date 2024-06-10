import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Error from './Components/Error.jsx'
import Shop from './Components/Shop.jsx'
import PalestineShop from './Components/PalestineShop.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
