import React from 'react'

const Filters = ({onSelectCategory}) => {
  return (
    <select className='form-select' onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value="">All Business Areas</option>
        <option value="IT">IT</option>

        <option value="Finance">Finance</option>
        <option value="HR">HR</option>

        <option value="Housing">Housing</option>

        <option value="Care">Care</option>


    </select>
  )
}

export default Filters