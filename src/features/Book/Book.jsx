import { useBook } from "../../Context/BookContext"
import Spinner from "../../ui/Spinner"
import SearchedBooks from "./SearchedBooks"

const Book = () => {
  const { onSearch, query, status, dispatch } = useBook()

  return (
    <div className="w-full min-h-[85vh]">
      <div className="flex flex-col items-center justify-center min-h-full px-20 pt-14">
        <h1 className="py-3 text-4xl font-bold">Find a Book</h1>
        <p className="py-3 text-lg">
          You can find using the name or author of the book.{" "}
        </p>
        <form
          onSubmit={onSearch}
          className="flex justify-center items-center space-x-5 w-[500px]"
        >
          <input
            type="text"
            value={query}
            onChange={(e) =>
              dispatch({ type: "set_query", payload: e.target.value })
            }
            placeholder="Search for a book"
            className="w-[450px] px-2 py-1 border border-gray-400 rounded-md outline-none"
          />
          <button className="w-32 px-2 py-1 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700">
            Search
          </button>
        </form>

        <div className="w-full min-h-[250px] mt-10 flex justify-center px-20">
          {status === "active" && <p>Search for books</p>}
          {status === "loading" && <Spinner />}
          {status === "dataLoaded" && <SearchedBooks />}
        </div>
      </div>
    </div>
  )
}

export default Book
