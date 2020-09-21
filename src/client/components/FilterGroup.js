import React from "react";

export default function FilterGroup(props) {
  return (
    <div className="mt-1 text-center">
      <h5 className="border-bottom text-bold border-dark text-center pb-1">
        {props.filterName}
      </h5>
      {props.filterValue !== null && (
        <p
          className="btn-small w-75 red white-text p-0 text-center accent-4"
          onClick={() => props.setFilter(null)}
        >
          x clear filter
        </p>
      )}
      <div className="row">
        {props.filterOptions.map((option, index) => (
          <div key={option} className="col-6 p-1">
            <button 
              className={`filter-item ${
                props.filterValue === option
                  ? "btn-small w-75 light-green black-text p-0 text-center accent-10"
                  : "btn-small w-75 p-0  text-center black-text light-green accent-1"
              }`}
              onClick={() => props.setFilter(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
