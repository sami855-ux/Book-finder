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
      <li className="ml-4 cursor-pointer">Home</li>
      <li className="ml-4 cursor-pointer">Book</li>
      <li className="ml-4 cursor-pointer">About</li>
    </ul>
  )
}

export default Header
