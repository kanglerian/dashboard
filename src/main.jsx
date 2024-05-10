import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Profile from './pages/Profile'
import Todolist from './pages/Todolist'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
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
