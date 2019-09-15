import PropTypes from 'prop-types'
import React from 'react'
import '../styles/modal.css'

const Modal = ({handleModalClose, modalDisplay}) => (
  <div className="news-image-modal">
    <button className="news-image-modal-close" onClick={handleModalClose}>X</button>
    <img className="news-image-modal-image" alt="large modal" src={modalDisplay} />
  </div>
)

Modal.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalDisplay: PropTypes.string.isRequired,
}

export default Modal
