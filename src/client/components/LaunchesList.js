import React from "react";
import LaunchCard from "./LaunchCard";

export default function LaunchesList(props) {
  return props.loading ? (
    <div className=" vh-100 col-12 d-flex justify-content-center align-items-center ">
      <button className="btn btn-primary" type="button">
        <span
          className="spinner-border spinner-border-sm mr-3"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  ) : props.launches.length > 0 ? (
    props.launches.map((launch, i) => (
      <div key={launch.flightNumber} className="col-12 col-md-6 col-lg-3">
        <LaunchCard launch={launch} />
      </div>
    ))
  ) : (
    <h1>No data found with specific filter</h1>
  );
}
