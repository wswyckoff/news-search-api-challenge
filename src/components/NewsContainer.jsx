import classNames from 'classnames'
import React, {useState} from 'react'
import '../styles/news-container.css'

import {useFetchNews} from '../hooks/useFetchNews'
import Modal from './Modal'
import SearchForm from './SearchForm'
import SearchResultsList from './SearchResultsList'

const NewsContainer = () => {
  const [
    {isDoneFetching, isError, isPending, searchResults, searchTerm},
    setIsSearchTermSubmitted,
    setSearchTerm,
  ] = useFetchNews()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalDisplay, setModalDisplay] = useState('')

  const handleSearchSubmit = e => {
    setIsSearchTermSubmitted(true)
    e.preventDefault()
  }

  const handleModalClose = () => {
    setModalDisplay('')
    setIsModalVisible(false)
  }

  const handleModalOpen = imgSrc => {
    setModalDisplay(imgSrc)
    setIsModalVisible(true)
  }

  return (
    <section className={classNames('news-container', {
      'is--modal-visible': isModalVisible,
    })}>
      <h1 className="news-container-title">News Fetcher-Getter</h1>
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <div className="news-container-search-results">
        {isError && <div>No available search results, try again.</div>}
        {isPending
          ? <div>...loading</div>
          : (
            <SearchResultsList
              handleModalOpen={handleModalOpen}
              isDoneFetching={isDoneFetching}
              searchResults={searchResults}
            />
          )
        }
      </div>
      {isModalVisible &&
        <Modal
          handleModalClose={handleModalClose}
          modalDisplay={modalDisplay}
        />
      }
    </section>
  )
}

export default NewsContainer
