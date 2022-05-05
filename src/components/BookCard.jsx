import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/Actions'

const BookCard = ({ book }) => {
  const { favourite } = useSelector((state) => state.books)
  const dispatch = useDispatch()

  return (
    <div className='single-book' key={book._version_}>
      <div className='book-chil'>
        <div className='img-container'>
          {book.cover_edition_key ? (
            <img
              src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}
              alt={book.title_suggest}
            />
          ) : (
            <img
              src={`https://i5.walmartimages.com/asr/74d5a667-7df8-44f2-b9db-81f26878d316_1.c7233452b7b19b699ef96944c8cbbe74.jpeg`}
              alt={book.title_suggest}
            />
          )}
        </div>
      </div>
      <div className='book-child'>
        <div className='child-content'>
          <p className='title'>{book.title_suggest}</p>
          <p className='author'>
            {book.author_name ? book.author_name[0] : ''}
          </p>

          <p>published: {book.first_publish_year}</p>
          <p>
            pages:{' '}
            {book.number_of_pages_median
              ? book.number_of_pages_median
              : 'not avaliable'}
          </p>
          <button
            onClick={() =>
              dispatch(
                favourite.find((b) => b._version_ === book._version_)
                  ? RemoveFromFavouriteAction(book._version_)
                  : addFavouriteAction(book)
              )
            }
            className={
              `btn btn-` +
              (favourite.find((b) => b._version_ === book._version_)
                ? `remove`
                : `add`)
            }
          >
            {favourite.find((b) => b._version_ === book._version_)
              ? `Remove From My Books `
              : `Add To My Books`}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard
