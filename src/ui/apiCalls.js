const BASE_URL = `https://www.googleapis.com/books/v1/volumes?key=${
  import.meta.env.VITE_API_KEY
}`

//&q=safe
async function getBooks(name) {
  const response = await fetch(`${BASE_URL}&q=${name}`)
  const data = await response.json()
  return data
}

export { getBooks }
