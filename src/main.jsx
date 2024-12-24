import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BookContextProvider } from "./Context/BookContext.jsx"
import "./index.css"
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </StrictMode>
)
