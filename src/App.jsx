import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AppLayout from "./ui/AppLayout"
import HeroSection from "./features/Hero/HeroSection"
import Book from "./features/Book/Book"

const router = createBrowserRouter([
  {
    path: "/", // matches the root URL
    element: <AppLayout />,
    children: [
      {
        index: true, // matches the root URL exactly
        element: <HeroSection />,
      },
      {
        path: "/books",
        element: <Book />,
        children: [
          {
            path: ":bookId",
            element: <div>Book Details</div>,
          },
        ],
      },

      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
