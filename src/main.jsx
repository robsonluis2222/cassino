import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home/Home'
import Convidar from './routes/Convidar/Convidar'
import Conta from './routes/Conta/Conta'
import Bonus from './routes/Bonus/Bonus'
import Game1 from './routes/Game1/Game1'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/convidar",
    element: <Convidar />,
  },
  {
    path: "/conta",
    element: <Conta />,
  },
  {
    path: "/bonus",
    element: <Bonus />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
