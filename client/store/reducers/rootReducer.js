import { combineReducers } from 'redux';
import currentStatsReducer from './currentStatsReducer';
import allStatsReducer from './allStatsReducer';

const rootReducer = combineReducers({
  currentStats: currentStatsReducer,
  allStats: allStatsReducer,
});

export default rootReducer;
