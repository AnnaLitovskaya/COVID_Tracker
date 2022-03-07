/* eslint-disable default-param-last */
import { GET_CURRENT } from '../storeComponents/getCurrent';

const currentStatsReducer = (state = {}, action) => {
  if (action.type === GET_CURRENT) {
    return { ...state, ...action.current };
  }
  return state;
};

export default currentStatsReducer;
