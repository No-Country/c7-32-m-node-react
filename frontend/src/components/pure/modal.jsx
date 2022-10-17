import React from 'react'
import PropTypes from 'prop-types'
import { IoCloseOutline } from 'react-icons/io5'


const Modal = ({ children, isOpen, close }) => {

  const handleContainerClick = (e) => e.stopPropagation()

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={close}>
      <div className='modal-container' onClick={handleContainerClick}>
        <button className='modal-close' onClick={close}>
          <IoCloseOutline className='icon' />
        </button>
        {children}
      </div>
    </article>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default Modal
