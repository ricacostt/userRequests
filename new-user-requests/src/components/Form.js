import React from "react";
import { useForm } from "react-hook-form";
import { businessAreas } from "./Filters";
const Form = ({onSubmit}) => {
  const { register, handleSubmit, reset, formState: {errors, isValid} } = useForm();

  const onSubmitWithData = (data) => {
    const dataWithDefault = { ...data, completed: false };
    onSubmit(dataWithDefault);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmitWithData)}>
      <div className="mb-3"> </div>
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        {...register("firstName", { required: true, minLength: 2 })}
        id="firstName"
        type="text"
        className="form-control"
      />
    {/* the optional chaining is needed in case the error object is empty(we can't access the type of firstName if it doesn't exist, we'l have a runtime error) */}
      {errors.firstName?.type === 'required' && <p className="text-danger">The first name field is required.</p>}
     { errors.firstName?.type === 'minLength' && <p className="text-danger">The first name must be at least 2 characters.</p> } 
      <br />
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        {...register("lastName", { required: true, minLength: 2 })}
        id="lastName"
        type="text"
        className="form-control" />
        {errors.lastName?.type === 'required' && <p className="text-danger">The last name field is required.</p>}
     { errors.lastName?.type === 'minLength' && <p className="text-danger">The last name must be at least 2 characters.</p> } 
      <br />
      <label htmlFor="jobTitle" className="form-label">
        Job Title
      </label>
      <input
        {...register("jobTitle", { required: true, minLength: 2 })}
        id="jobTitle"
        type="text"
        className="form-control"
      />
      {errors.jobTitle?.type === 'required' && <p className="text-danger">The job title field is required.</p>}
     { errors.jobTitle?.type === 'minLength' && <p className="text-danger">The job title must be at least 2 characters.</p> } 
      <br />
      <label htmlFor="lineManager" className="form-label">
        Line Manager
      </label>
      <input
        {...register("lineManager", { required: true, minLength: 2 })}
        id="lineManager"
        type="text"
        className="form-control"
      />
      {errors.lineManager?.type === 'required' && <p className="text-danger">The line manager field is required.</p>}
     { errors.lineManager?.type === 'minLength' && <p className="text-danger">The line manager must be at least 2 characters.</p> } 
      <br />
      <label htmlFor="startDate" className="form-label">
        Start Date
      </label>
      <input
        {...register("startDate", { required: true})}
        id="startDate"
        type="date"
        className="form-control"
      />
      {errors.startDate?.type === 'required' && <p className="text-danger">The start date field is required.</p>}
     
      <br />

      <label htmlFor="businessArea" className="form-label">
        Business Area
      </label>
      <select id='businessArea'
        className="form-select"
        aria-label="Default select"
        {...register("businessArea", { required: true })}
        defaultValue="Choose the business area"
      >
      {businessAreas.map(area=><option key={area} value={area}>{area}</option>)}

      </select>
      {errors.businessArea?.type === 'required' && <p className="text-danger">The business area field is required.</p>}

      <div className="modal-footer mt-3">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Add to List
        </button>
      </div>
    </form>
  );
};

export default Form;
