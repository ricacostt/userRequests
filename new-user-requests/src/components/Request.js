import React from "react";

const Request = ({ request, onDelete }) => {
  return (
    <tbody>
    <tr>
      
      <td>{request.firstName}</td>
      <td>{request.lastName}</td>
      <td>{request.jobTitle}</td>
      <td>{request.lineManager}</td>
      <td>{request.startDate}</td>
      <td>{request.businessArea}</td>
      <td>
        <button type="checkbox">Completed</button>
      </td>
      <td>
        <button onClick={()=> onDelete(request.id)} className="btn btn-outline-danger" type="button">Delete</button>
      </td>
    </tr>
    </tbody>
  );
};

export default Request;
