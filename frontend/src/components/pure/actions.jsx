import React from 'react'
import Modal from './modal'
import TransferForm from './forms/transferForm'
import { useModal } from '../../hooks/useModal'

import '../../styles/modal.css'

const Actions = () => {

  const [transferIsOpen, openTransfer, closeTransfer] = useModal(false)
  const [exchangeIsOpen, openExchange, closeExchange] = useModal(false)


  return (
    <section className='actions'>
      <div className='action-deposit'>
        <button className='btn' onClick={openTransfer}>
          Ingresar dinero
        </button>
        <Modal isOpen={transferIsOpen} close={closeTransfer} >
          <TransferForm />
        </Modal>
      </div>
      <div className='action-transfer'>
        <button className='btn' onClick={openTransfer}>
          Realizar transferencia
        </button>
        <Modal isOpen={transferIsOpen} close={closeTransfer} >
          <TransferForm />
        </Modal>
      </div>
      <div className='action-exchange'>
        <button className='btn' onClick={openExchange} >
          Cambio de moneda
        </button>
        <Modal isOpen={exchangeIsOpen} close={closeExchange} >
          <TransferForm />
        </Modal>
      </div>
    </section>
  )
}

export default Actions
