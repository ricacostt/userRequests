import React from "react";
import requests from "../data/data.json";
import Request from "./Request";

const RequestsList = () => {
  return (
    <div>
      <h1 className="text-left pt-5 pb-2">Requests List</h1>
      {requests ? (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Job Title</th>
                <th scope="col">Line Manager</th>
                <th scope="col">Start Date</th>
                <th scope="col">Business Area</th>
                <th scope="col">Mark as completed</th>
                <th scope="col">Delete Request</th>

              </tr>
            </thead>
            {requests.map((request) => (
              <Request request={request} />
            ))}
          </table>{" "}
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default RequestsList;
