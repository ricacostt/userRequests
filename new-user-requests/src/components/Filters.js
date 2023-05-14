import React from 'react'

export const businessAreas = ["IT", "Finance", "HR", "Housing", "Care"]

const Filters = ({onSelectCategory}) => {
  return (
    <select className='form-select' onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value="">All Business Areas</option>
{businessAreas.map(area=><option key={area} value={area}>{area}</option>)}

    </select>
  )
}

export default Filters