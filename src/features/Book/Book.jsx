import { useState } from "react"
import { Outlet } from "react-router-dom"

const Book = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Add search logic here
  }

  return (
    <div className="w-full min-h-[85vh]">
      <div className="flex justify-center items-center min-h-full px-20 flex-col pt-14">
        <h1 className="text-4xl font-bold py-3">Find a Book</h1>
        <p className="text-lg py-3">
          You can find using the name or author of the book.{" "}
        </p>
        <form
          onSubmit={handleSearch}
          className="flex justify-center items-center space-x-5 w-[500px]"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a book"
            className="w-[450px] px-2 py-1 border border-gray-400 rounded-md outline-none"
          />
          <button className="w-32 px-2 py-1 bg-blue-500 text-white hover:bg-blue-700 transition duration-300 rounded-md">
            Search
          </button>
        </form>

        <div className="w-full min-h-[250px] mt-10 flex justify-center px-20">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Book
