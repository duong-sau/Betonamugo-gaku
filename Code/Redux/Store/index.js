import {createStore} from 'redux';
import CombineReducer from '../Reducer/index';
const initialState = {
  alert: false,
};
export const store = createStore(CombineReducer, initialState);
