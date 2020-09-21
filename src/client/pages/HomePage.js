import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types"; // ES6
import { fetchLaunches } from "../actions";
import Sidebar from "../components/Sidebar";
import LaunchesList from "../components/LaunchesList";
import { useLocation, useHistory } from "react-router-dom";
import dataUtils from "../utils/dataUtils";

const HomePage = (props) => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchFilteredLaunches = async () => {
      await props.fetchLaunches(location.search);
      setLoading(false);
    };
    fetchFilteredLaunches();
  }, [location.search]);

  const handleUpdateSearchString = (searchString) => {
    setLoading(true);
    history.push(searchString);
  };

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>SpaceX - missions</title>
        <meta property="og:title" content="SpaceX App" />
        <meta name="description" content="SpaceX Launches Data Application" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://spacex-sapient.herokuapp.com" />
      </Helmet>
    );
  };

  return (
    <div>
      {head()}
      <div className="row">
        <div className="section">
          <h2 className="pl-2 font-weight-bold ">SpaceX Launch Programs</h2>
        </div>
        <div className="divider" />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <Sidebar updateSearchString={handleUpdateSearchString} />
            </div>
            <div className="col-12 col-md-9 col-lg-10">
              <div className="row ">
                <LaunchesList loading={loading} launches={props.launchesData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    launchesData: state.launchesData,
  };
};

const loadData = (store) => {
  //Load the initial data before the rendering takes place.
  return store.dispatch(fetchLaunches());
};

HomePage.propTypes = {
  launchesData: PropTypes.arrayOf(PropTypes.any),
  fetchLaunches: PropTypes.func,
};

HomePage.defaultProps = {
  launchesData: [],
  fetchLaunches: null,
};

export default {
  component: connect(mapStateToProps, { fetchLaunches })(HomePage),
  loadData,
};
