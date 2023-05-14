import React, { useState } from "react";

const Request = ({ request, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);
  const label = isChecked ? "Completed" : "In Progress";
  const rowClass = isChecked ? "text-decoration-line-through" :  ""
  return (
    <tbody>
      <tr className={rowClass}>
        <td>{request.firstName}</td>
        <td>{request.lastName}</td>
        <td>{request.jobTitle}</td>
        <td>{request.lineManager}</td>
        <td>{request.startDate}</td>
        <td>{request.businessArea}</td>
        <td>
          <div className="form-check">
            <input
              request={request}
              className="form-check-input"
              type="checkbox"
              value=""
              id={request.id}
              checked={isChecked}
              onChange={()=>setIsChecked(!isChecked)}
            />
            <label className="form-check-label" htmlFor={request.id}>
              {label}
            </label>
          </div>
        </td>
        <td>
          <button
            request={request}
            onClick={() => onDelete(request.id)}
            className="btn btn-outline-danger"
            type="button"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default Request;
