import PropTypes from 'prop-types'
import React from 'react'
import '../styles/search-form.css'

const SearchForm = ({handleSearchSubmit, searchTerm, setSearchTerm}) => (
  <form className="search-form" onSubmit={handleSearchSubmit}>
    <label className="search-form-label" htmlFor="news">Search News</label>
    <input
      className="search-form-input"
      name="news"
      type="text"
      onChange={(e) => setSearchTerm(e.target.value)}
      value={searchTerm}
    />
    <button
      disabled={searchTerm === ''}
      className="search-form-button"
      type="submit"
    >
      Submit
    </button>
  </form>
)

SearchForm.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func.isRequired,
}

export default SearchForm
