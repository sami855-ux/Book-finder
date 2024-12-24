const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 h-[200px]">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Book Finder</h2>
          <p className="text-sm">
            &copy; 2023 Book Finder. All rights reserved.
          </p>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="transition duration-300 hover:text-gray-400">
            Home
          </a>
          <a href="#" className="transition duration-300 hover:text-gray-400">
            Books
          </a>
          <a href="#" className="transition duration-300 hover:text-gray-400">
            About
          </a>
          <a href="#" className="transition duration-300 hover:text-gray-400">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
