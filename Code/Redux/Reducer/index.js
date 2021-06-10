import {combineReducers} from 'redux';
import alertReducer from './AlertReducer';
const CombineReducer = combineReducers({
  alert: alertReducer,
});
export default CombineReducer;
