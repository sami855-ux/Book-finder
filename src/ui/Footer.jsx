const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Book Finder</h2>
          <p className="text-sm">
            &copy; 2023 Book Finder. All rights reserved.
          </p>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Books
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
