import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AppLayout from "./ui/AppLayout"
import HeroSection from "./features/Hero/HeroSection"
import Book from "./features/Book/Book"
import BookItems from "./features/Book/BookItems"
import AboutMe from "./features/About/AboutMe"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HeroSection />,
      },
      {
        path: "/books",
        element: <Book />,
      },
      {
        path: "/books/:bookId",
        element: <BookItems />,
      },

      {
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
