import React, { useState, useEffect } from "react";
import dataUtils from "../utils/dataUtils";

// import "./Sidebar.css";
import FilterGroup from "./FilterGroup";

export default function Sidebar(props) {
  const [yearFilter, setYearFilter] = useState(null);
  const [launchSuccessFilter, setLaunchSuccessFilter] = useState(null);
  const [landSuccessFilter, setLandSuccessFilter] = useState(null);

  const years = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  useEffect(() => {
    const searchString = dataUtils.createSearchString(
      yearFilter,
      launchSuccessFilter,
      landSuccessFilter
    );
    props.updateSearchString(searchString);
  }, [yearFilter, launchSuccessFilter, landSuccessFilter]);

  return (
    <aside className="bg-white p-2 mb-2">
      <h3 className="font-weight-bold text-left">Filters</h3>
      <FilterGroup
        filterName="Launch Year"
        filterValue={yearFilter}
        setFilter={setYearFilter}
        filterOptions={years}
      />
      <FilterGroup
        filterName="Successful Launch"
        filterValue={launchSuccessFilter}
        setFilter={setLaunchSuccessFilter}
        filterOptions={["true", "false"]}
      />
      <FilterGroup
        filterName="Successful Landing"
        filterValue={landSuccessFilter}
        setFilter={setLandSuccessFilter}
        filterOptions={["true", "false"]}
      />
    </aside>
  );
}