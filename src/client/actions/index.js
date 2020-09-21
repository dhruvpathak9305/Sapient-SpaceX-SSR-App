import axios from "axios";

import dataUtils from "../utils/dataUtils";

// export const FETCH_MISSIONS = "fetch_articles";

export const FETCH_LAUNCHES = "fetch_launches";

export const fetchLaunches = (searchString = "") => async (dispatch) => {
  let url = `https://api.spaceXdata.com/v3/launches?limit=100&${searchString.slice(
    1
  )}`;

  const res = await axios.get(url);

  const formatData = dataUtils.formatLaunchData(res.data);
  // console.log(formatData);

  dispatch({
    type: FETCH_LAUNCHES,
    payload: formatData,
  });
};
