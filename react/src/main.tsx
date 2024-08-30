import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import WorkshopB1 from './routes/workshopB1'
import WorkshopB2 from './routes/workshopB2'
import WorkshopB3 from './routes/workshopB3'



const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "workshopB1/",
    element: <WorkshopB1 />,
  },
  {
    path: "workshopB2/",
    element: <WorkshopB2 />,
  },
  {
    path: "workshopB3/",
    element: <WorkshopB3 />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
