import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksAction } from '../redux/Actions'
import BooksApi from '../services/BooksApi'
import BookCard from './BookCard'
import { FaSearch } from 'react-icons/fa'
import { Loading } from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

const Books = () => {
  const { books } = useSelector((state) => state.books)
  const [loading, setLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [size, setSize] = useState(9)

  const fetchBooks = async () => {
    setSize(size + 9)
    setLoading(true)
    try {
      const data = await BooksApi.getBooks(searchValue, size)
      dispatch(fetchBooksAction(data))
      if (data) {
        setLoading(false)
        setSearchPerformed(true)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className='main'>
      <section className='section-search'>
        <form
          className='search-form'
          onSubmit={(e) => {
            e.preventDefault()
            fetchBooks()
          }}
        >
          <div className='form-control'>
            <label>search your favourite book!</label>
            <div className='aa'>
              <input
                type='text'
                name='searchValue'
                onChange={(e) => setSearchValue(e.target.value)}
              />{' '}
              <button type='submit' className='submit-btn'>
                <FaSearch />
              </button>
            </div>
          </div>
        </form>
      </section>

      <InfiniteScroll
        dataLength={books.length}
        next={fetchBooks}
        hasMore={true}
        loader={loading ? <Loading /> : null}
      >
        <div className='books'>
          {books &&
          books.length === 0 &&
          searchPerformed === true &&
          loading === false ? (
            <div className='error-message'>
              <h1>No Books Found For Your Search Criteria!</h1>
            </div>
          ) : (
            books.map((book) => <BookCard book={book} />)
          )}
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default Books
