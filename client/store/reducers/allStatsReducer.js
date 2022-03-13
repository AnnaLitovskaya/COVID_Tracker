/* eslint-disable default-param-last */
import { GET_ALL } from '../storeComponents/getAll';

const allStatsReducer = (state = [], action) => {
  if (action.type === GET_ALL) {
    return [...state, ...action.all];
  }
  return state;
};

export default allStatsReducer;
