import { createContext, useContext, useReducer } from "react"
import PropTypes from "prop-types"
import { getBooks } from "../ui/apiCalls"

const BookCont = createContext()

const initialState = {
  query: "",
  books: [],
  loading: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "set_query":
      return { ...state, query: action.payload }
    case "set_books":
      return { ...state, books: action.payload }
    default:
      return state
  }
}

const BookContextProvider = ({ children }) => {
  const [{ query, books, loading }, dispatch] = useReducer(
    reducer,
    initialState
  )

  //Methods
  const handleSearch = (e) => {
    e.preventDefault()

    //API call to search for book
    // console.log("Searching for book")
    getBooks("harry potter").then((data) => {
      const filteredBook = {
        totalItems: data.totalItems,
        books: data.items.map((item) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
          }
        }),
      }
      console.log(filteredBook)
      dispatch({ type: "set_books", payload: filteredBook })
    })

    //Cleaning up the input field
    dispatch({ type: "set_query", payload: "" })
  }

  const value = { query, books, loading, dispatch, onSearch: handleSearch }

  return <BookCont.Provider value={value}>{children}</BookCont.Provider>
}

const useBook = () => {
  const context = useContext(BookCont)

  return context
}

BookContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
}

export { BookContextProvider, useBook }
