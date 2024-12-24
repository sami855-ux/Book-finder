import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AppLayout from "./ui/AppLayout"
import HeroSection from "./features/Hero/HeroSection"

const router = createBrowserRouter([
  {
    path: "/", // matches the root URL
    element: <AppLayout />,
    children: [
      {
        index: true, // matches the root URL exactly
        element: <HeroSection />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
