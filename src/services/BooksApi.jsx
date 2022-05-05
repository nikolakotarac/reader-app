import axios from 'axios'

function getBooks(searchValue, size) {
  return axios
    .get(`http://openlibrary.org/search.json?q=${searchValue}&limit=${size}`)
    .then((response) => response.data.docs)
}

export default {
  getBooks,
}
