import { Link, useParams } from "react-router-dom"
import { useBook } from "../../Context/BookContext"

const BookItems = () => {
  const { books } = useBook()
  const { bookId } = useParams()
  const filteredBook = books.itemBook.find((book) => book.id === bookId)

  return (
    <div className="w-full min-h-[65vh] flex justify-center pt-24 px-20">
      <div className="flex space-x-5 w-[800px] h-44 p-5  rounded-md ">
        <img
          src={filteredBook.image}
          alt={filteredBook.title}
          className="px-2 py-2 w-44 h-44"
        />
        <div>
          <h1 className="text-xl font-bold">{filteredBook.title}</h1>
          <p className="text-sm">{filteredBook.authors}</p>
          <p className="text-sm">
            {`${filteredBook.description}`.substring(0, 150) + "..."}
          </p>
          <a href={`${filteredBook.infoLink}`} target="_blank">
            <p className="pt-2 text-sm text-blue-700 cursor-pointer">
              Read More...
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BookItems
