/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

// action type
const GET_CURRENT = 'GET_CURRENT';

// action creators
const _getCurrent = (current) => ({ type: GET_CURRENT, current });

// thunk
const getCurrent = () => async (dispatch) => {
  try {
    const currentData = await axios.get(
      'https://api.covidtracking.com/v1/us/current.json'
    );
    dispatch(_getCurrent(currentData.data[0]));
  } catch (err) {
    console.log(err.response);
  }
};

export { getCurrent, GET_CURRENT };
