import React, {useState} from "react";
import requestsData from "../data/data.json";
import Request from "./Request";
import Filters from "./Filters";

const RequestsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const [requests, setRequests] = useState(requestsData)
  const visibleRequests = selectedCategory ? requests.filter(request => request.businessArea === selectedCategory ) : requests
  return (
    <div>
       <div className='mt-5'>
      <Filters onSelectCategory={category => setSelectedCategory(category) }/>
      </div>
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
              {/* The onDelete function takes an id parameter, which represents the unique identifier of the request to be deleted. The function first filters the requests array to remove the request with the matching id. It does this by using the filter function, which takes an arrow function that returns true for every element that should be kept in the array, and false for elements that should be removed. */}
            {visibleRequests.map((request) => (
              <Request request={request} key={request.id} onDelete={(id)=> setRequests(requests.filter((request)=> request.id !== id))}/>
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
