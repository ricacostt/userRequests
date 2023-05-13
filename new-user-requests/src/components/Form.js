import React from 'react'
import {useForm} from 'react-hook-form'
const Form = () => {
    const {register, handleSubmit} = useForm()

    const onSubmit = data => console.log(data)

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
   <div className='mb-3'> </div>
   <label htmlFor='firstName' className='form-label'>First Name</label>
   <input {...register('firstName')}id='firstName' type='text' className='form-control'/>
   <br/>
   <label htmlFor='lastName' className='form-label'>Last Name</label>
   <input {...register('lastName')} id='lastName' type='text' className='form-control'/>
   <br/>
   <label htmlFor='jobTitle' className='form-label'>Job Title</label>
   <input {...register('jobTitle')} id='jobTitle' type='text' className='form-control'/>
   <br/>
   <label htmlFor='lineManager' className='form-label'>Line Manager</label>
   <input {...register('lineManager')} id='lineManager' type='text' className='form-control'/>
   <br/>
   <label htmlFor='startDate' className='form-label'>Start Date</label>
   <input {...register('startDate')} id='startDate' type='date' className='form-control'/>
   <br/>
   
   <select className="form-select" aria-label="Default select" {...register('businessArea')}>
  <option selected>Choose the business area</option>
  <option value="IT">IT</option>
  <option value="Finance">Finance</option>
  <option value="HR">HR</option>
  <option value="Housing">Housing</option>
  <option value="Care">Care</option>

</select>
   
   
   <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Add to List</button>
      </div>
   </form>
  )
}

export default Form