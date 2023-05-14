import React from 'react'

export const businessAreas = ["IT", "Finance", "HR", "Housing", "Care"]
export const status = ["Completed", "In Progress"]

const Filters = ({onSelectBusinessArea, onSelectStatus}) => {
  return (
    <div className='d-flex flex-row gap-3'>
    <div>
    <select className='form-select' aria-label="Default select example" onChange={(event)=> onSelectBusinessArea(event.target.value)}>
        <option default value="">All Business Areas</option>
{businessAreas.map(area=><option key={area} value={area}>{area}</option>)}

    </select>
    </div>
    <div>

    <select className='form-select' aria-label="Default select example" onChange={(event)=> onSelectStatus(event.target.value)}>
        <option default value="">Show All Status</option>
{status.map(status=><option key={status} value={status}>{status}</option>)}
</select>
    </div>
    </div>
  )
}

export default Filters