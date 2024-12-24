import { Link } from "react-router-dom"
import { useBook } from "../../Context/BookContext"

const SearchedBooks = () => {
  const { books } = useBook()
  return (
    <div className="flex flex-wrap justify-center w-screen gap-2 px-20 mb-8">
      {books.itemBook.map((book) => {
        return (
          <Link to={`/books/${book.id}`} key={book.id}>
            <div className="flex space-x-5 w-[500px] h-44 p-5 border border-gray-300 rounded-md cursor-pointer">
              <img
                src={book.image}
                alt={book.title}
                className="w-20 h-20 px-2 py-2"
              />
              <div>
                <h1 className="text-lg font-bold">{book.title}</h1>
                <p className="text-sm">{book.authors}</p>
                <p className="text-sm">
                  {`${book.description}`.substring(0, 150) + "..."}
                </p>
                <p className="font-semibold text-blue-700 cursor-pointer">
                  {" "}
                  More...
                </p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SearchedBooks
