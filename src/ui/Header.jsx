import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full h-20  flex items-center px-20 justify-between">
      <h1 className="font-bold text-3xl">Book Finder</h1>

      <Menu />
    </div>
  )
}

const Menu = () => {
  return (
    <ul className="w-fit h-full flex items-center list-style-none space-x-5">
      <Link to="/">
        <li className="ml-4 cursor-pointer">Home</li>
      </Link>
      <Link to="/books">
        <li className="ml-4 cursor-pointer">Book</li>
      </Link>
      <Link to="/about">
        <li className="ml-4 cursor-pointer">About</li>
      </Link>
    </ul>
  )
}

export default Header
