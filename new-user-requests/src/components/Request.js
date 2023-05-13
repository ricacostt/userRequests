import React from "react";

const Request = ({ request }) => {
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
        <button type="checkbox"></button>
      </td>
      <td>
        <button type="button"></button>
      </td>
    </tr>
    </tbody>
  );
};

export default Request;
