import PropTypes from 'prop-types'
import React from 'react'

const SearchResultsListItem = ({handleModalOpen, result: {
  author,
  description,
  title,
  url,
  urlToImage,
}}) => (
  <li className="search-results-list-item">
    <div className="search-results-list-item-content">
      <a
        className="search-results-list-item-link"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="search-results-list-item-title">{title}</h2>
        <h3 className="search-results-list-item-author">{author}</h3>
        <p className="search-results-list-item-text">{description}</p>
      </a>
    </div>
    <div className="search-results-list-item-image-wrapper" onClick={() => handleModalOpen(urlToImage)}>
      <img className="search-results-list-item-image" alt={`img to ${title}`} src={urlToImage} />
    </div>
  </li>
)

SearchResultsListItem.propTypes = {
  handleModalOpen: PropTypes.func.isRequired,
  result: PropTypes.shape({
    author: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
  }).isRequired,
}

export default SearchResultsListItem
