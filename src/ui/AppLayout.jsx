import { Outlet } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"

const AppLayout = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
