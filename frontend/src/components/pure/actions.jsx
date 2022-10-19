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
<<<<<<< HEAD
    <div className='action-deposit'>
        <button className='btn' onClick={ openDeposit }>
=======
      <div className='action-deposit'>
        <button className='btn' onClick={openDeposit}>
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
          Ingresar dinero
        </button>
        <Modal isOpen={depositIsOpen} close={closeDeposit} >
          <DepositForm />
        </Modal>
      </div>
      <div className='action-transfer'>
<<<<<<< HEAD
        <button className='btn' onClick={ openTransfer }>
=======
        <button className='btn' onClick={openTransfer}>
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
          Realizar transferencia
        </button>
        <Modal isOpen={transferIsOpen} close={closeTransfer} >
          <TransferForm />
        </Modal>
      </div>
<<<<<<< HEAD
=======
      {/* <div className='action-exchange'>
        <button className='btn' onClick={openExchange} >
          Cambio de moneda
        </button>
        <Modal isOpen={exchangeIsOpen} close={closeExchange} >
          <TransferForm />
        </Modal>
      </div> */}
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
    </section>
  )
}

export default Actions
