import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import WorkshopA from './routes/workshopA'
import WorkshopB from './routes/workshopB'
import WorkshopC from './routes/workshopC'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "workshopA/",
    element: <WorkshopA />,
  },
  {
    path: "workshopB/",
    element: <WorkshopB />,
  },
  {
    path: "workshopC/",
    element: <WorkshopC />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
