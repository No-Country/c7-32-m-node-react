import React from 'react'
import Modal from './modal'
import TransferForm from './forms/transferForm'
import { useModal } from '../../hooks/useModal'

import '../../styles/modal.css'
import DepositForm from './forms/depositForm'

const Actions = () => {

  const [transferIsOpen, openTransfer, closeTransfer] = useModal(false)
  const [depositIsOpen, openDeposit, closeDeposit] = useModal(false)


  return (
    <section className='actions'>
    <div className='action-deposit'>
        <button className='btn' onClick={ openDeposit }>
          Ingresar dinero
        </button>
        <Modal isOpen={depositIsOpen} close={closeDeposit} >
          <DepositForm />
        </Modal>
      </div>
      <div className='action-transfer'>
        <button className='btn' onClick={ openTransfer }>
          Realizar transferencia
        </button>
        <Modal isOpen={transferIsOpen} close={closeTransfer} >
          <TransferForm />
        </Modal>
      </div>
    </section>
  )
}

export default Actions
