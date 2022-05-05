import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'

const FavouritePage = () => {
  const { favourite } = useSelector((state) => state.books)

  return (
    <div className='books'>
      <div className='row'>
        {favourite && favourite.map((book) => <BookCard book={book} />)}
      </div>
    </div>
  )
}

export default FavouritePage
