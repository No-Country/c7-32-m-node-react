import React from 'react'
// import PropTypes from 'prop-types'

import money from '../../assets/images/money.png'
import income from '../../assets/images/income.png'
import spend from '../../assets/images/spend.png'

const Stats = () => {
  return (
    <section className='stats-container'>
      <div className='money'>
        <p>Dinero</p>
        <p>${}</p>
        <img src={money}/>
      </div>
      <div className='income'>
        <p>Ingresos</p>
        <p>${}</p>
        <img src={income}/>
      </div>
      <div className='spend'>
        <p>Gastos</p>
        <p>${}</p>
        <img src={spend}/>
      </div>
    </section>
  )
}

// Stats.propTypes = {
//   props: PropTypes.string.isRequired
// }

export default Stats
