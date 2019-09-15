import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid/v4';
import '../styles/search-results-list.css'

import SearchResultsListItem from './SearchResultsListItem'

const SearchResultsList = ({handleModalOpen, isDoneFetching, searchResults}) => {
  if (isDoneFetching && !searchResults.length) {
    return (
      <div className="search-results-empty">No results found. Please try again.</div>
    )
  }
  return (
    <ul className="search-results-list">
      {searchResults.map(result =>
        <SearchResultsListItem
          key={uuid()}
          handleModalOpen={handleModalOpen}
          result={result}
        />
      )}
    </ul>
  )
}

SearchResultsList.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SearchResultsList
