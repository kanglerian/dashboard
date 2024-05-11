import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './assets/css/output.css'
import Profile from './pages/Profile'
import DetailExperience from './pages/DetailExperience'
import DetailEducation from './pages/DetailEducation'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Profile/>,
  },{
    path: "/experience",
    element: <DetailExperience/>,
  },{
    path: "/education",
    element: <DetailEducation/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
