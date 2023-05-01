import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Sigup from './components/Sigup/Sigup';
import ContextProvider from './components/ContextProvider/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute> ,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Sigup></Sigup>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider><RouterProvider router={router} /></ContextProvider>
  </React.StrictMode>,
)
