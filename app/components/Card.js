import { books } from "../data/books.js";
import useSortedBooks from "../sortingHook/Hook.js"; // Corrected the import

function Card() {
  const sortedBooks = useSortedBooks(books); // Use the sorted books

  return (
    <>
      <div className="flex flex-wrap justify-center items-center px-3 py-3">
        {sortedBooks.map((book, index) => ( // Use sortedBooks here
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" key={index}>
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Book cover"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.title}</div>
              <p className="text-gray-700 text-base">{book.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {book.genre}
              </span>
              <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-white-700 mr-2 mb-2">
                {book.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
