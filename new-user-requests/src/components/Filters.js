import React from 'react'

export const businessAreas = ["IT", "Finance", "HR", "Housing", "Care"]

const Filters = ({onSelectCategory}) => {
  return (
    <select className='form-select' aria-label="Default select example" onChange={(event)=> onSelectCategory(event.target.value)}>
        <option default value="All Business Area">All Business Areas</option>
{businessAreas.map(area=><option key={area} value={area}>{area}</option>)}

    </select>
  )
}

export default Filters