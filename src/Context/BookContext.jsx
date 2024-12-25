import { createContext, useContext, useReducer } from "react"
import PropTypes from "prop-types"

import { getBooks } from "../ui/apiCalls"

const BookCont = createContext()

const initialState = {
  query: "",
  books: [],
  status: "active",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "set_query":
      return { ...state, query: action.payload }
    case "set_books":
      return { ...state, books: action.payload, status: "dataLoaded" }
    case "set_status":
      return { ...state, status: "loading" }

    default:
      return state
  }
}

const BookContextProvider = ({ children }) => {
  const [{ query, books, status }, dispatch] = useReducer(reducer, initialState)

  //Methods
  const handleSearch = (e) => {
    e.preventDefault()

    //API call to search for book

    dispatch({ type: "set_status" })

    getBooks(query).then((data) => {
      const filteredBook = {
        totalItems: data.totalItems,
        itemBook: data.items.map((item) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.volumeInfo.description,
            image: item.volumeInfo.imageLinks.thumbnail,
            infoLink: item.volumeInfo.infoLink,
          }
        }),
      }
      console.log(filteredBook)
      dispatch({ type: "set_books", payload: filteredBook })
    })

    //Cleaning up the input field
    dispatch({ type: "set_query", payload: "" })
  }

  const value = { query, books, status, dispatch, onSearch: handleSearch }

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
