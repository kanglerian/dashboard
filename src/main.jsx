import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './assets/css/output.css'
import Profile from './pages/Profile'
import Todolist from './pages/Todolist'
import DetailProfile from './pages/DetailProfile'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },{
    path: "/profile",
    element: <DetailProfile/>,
  },{
    path: "/todolist",
    element: <Todolist/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
