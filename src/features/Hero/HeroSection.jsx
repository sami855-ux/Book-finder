const HeroSection = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-20 space-y-5 md:space-y-0">
      <section className="w-full md:w-1/2  h-1/2 md:h-full flex flex-col ">
        <h1 className="text-4xl font-bold py-3">
          Discover Your Next Favorite Book
        </h1>
        <p className="py-3">
          Welcome to Book Finder, your ultimate destination for discovering new
          books and authors. Whether you're looking for the latest bestsellers
          or hidden gems, we've got you covered.
        </p>
        <button className="w-52 mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Search Now
        </button>
      </section>

      <section className="w-full md:w-1/2  h-1/2 md:h-full">
        <img
          src="https://www.petercurcio.dev/static/de16ca6b3fcceeb26a3bbac22a1ad69c/84f5f/BookFinder.webp"
          alt=""
          className="w-full h-full"
        />
      </section>
    </div>
  )
}

export default HeroSection
