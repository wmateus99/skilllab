import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BgGradient from "./components/BgGradient.jsx";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/teste",
    element: <h1>Ola</h1>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BgGradient/> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
