/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

// action type
const GET_ALL = 'GET_ALL';

// action creators
const _getAll = (all) => ({ type: GET_ALL, all });

// thunk
const getAll = () => async (dispatch) => {
  try {
    const allData = await axios.get(
      'https://api.covidtracking.com/v1/us/daily.json'
    );
    console.log(allData.data);
    dispatch(_getAll(allData.data));
  } catch (err) {
    console.log(err.response);
  }
};

export { getAll, GET_ALL };
