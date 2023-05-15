import React, { useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import Request from "./components/Request";
import requestsData from "./data/data.json";
import Form from "./components/Form";

function App() {
  const [requests, setRequests] = useState(requestsData);

  const [selectedBusinessArea, setSelectedBusinessArea] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const visibleRequests = requests.filter((request) => {
    if (selectedBusinessArea && selectedStatus) {
      return (
        request.businessArea === selectedBusinessArea &&
        request.completed === (selectedStatus === "Completed")
      );
    } else if (selectedBusinessArea) {
      return request.businessArea === selectedBusinessArea;
    } else if (selectedStatus) {
      return request.completed === (selectedStatus === "Completed");
    } else {
      return true;
    }
  });

  return (
    <div className="app">
      <img src="/pobl-logo.png" className="App-logo" alt="logo" />
      <div className="d-flex flex-column">
        <div>
          <h1 className="text-left pt-5">User Requests</h1>
          <div className="d-flex flex-row justify-content-between">
            <div className="mt-5 mb-3">
              <Filters
                onSelectBusinessArea={(area) => setSelectedBusinessArea(area)}
                onSelectStatus={(status) => setSelectedStatus(status)}
              />
            </div>
            <div className=" mt-5 mb-3">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  className="pe-2"
                  src="./plus-circle.svg"
                  alt="plus icon"
                ></img>
                New Request
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      New Request
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <Form
                      onSubmit={(request) =>
                        setRequests([
                          ...requests,
                          { ...request, id: requests.length + 1 },
                        ])
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {visibleRequests.length > 0 ? (
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
                {/* The onDelete function first filters the requests array to remove the request with the matching id; the filter function, takes an arrow function that returns true for every element that should be kept in the array, and false for elements that should be removed. */}
                {visibleRequests.map((request) => (
                  <Request
                    request={request}
                    key={request.id}
                    onDelete={(id) =>
                      setRequests(
                        requests.filter((request) => request.id !== id)
                      )
                    }
                  />
                ))}
              </table>{" "}
            </div>
          ) : (
            <p>
              No Requests found matching the selected criteria. Please, select
              other filter options.
            </p>
          )}
        </div>
      </div>
      <div className="pt-3 pb-3">
        <span className="text-muted">
          © {new Date().getFullYear()} Federica Costantino x Pobl
        </span>
      </div>
    </div>
  );
}

export default App;
