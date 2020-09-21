import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LaunchCard(props) {
  const { launch } = props;

  return (
    <div className="white medium p-3 mb-3">
      <div className="card-image grey lighten-3">
        <LazyLoadImage
          className="h-100 w-100"
          alt="Card image cap"
          src={launch.missionPatch}
        />
      </div>

      <div className="mt-3 mb-3 small">
        <h5 className="blue-text">{`${launch.missionName} #${launch.flightNumber}`}</h5>
      </div>

      <div className="mt-1 mb-1 small">
        <h6 className="black-text font-weight-bold">Mission Ids: </h6>

        <span className="blue-text">
          <ul>
            <li>{launch.missionId}</li>
          </ul>
        </span>
      </div>

      <div className="mt-1 mb-1 small">
        <h6 className="black-text font-weight-bold">Launch Year: </h6>

        <span className="blue-text">{launch.launchYear}</span>
      </div>

      <div className="mt-1 mb-1 small">
        <h6 className="black-text font-weight-bold">Successful Launch: </h6>

        <span className="blue-text">
          {launch.launchSuccess ? "True" : "False"}
        </span>
      </div>

      <div className="mt-1 mb-1 small">
        <h6 className="black-text font-weight-bold">Sucessfull Landing: </h6>

        <span className="blue-text">
          {launch.landSuccess ? "True" : "False"}
        </span>
      </div>
    </div>
  );
}
