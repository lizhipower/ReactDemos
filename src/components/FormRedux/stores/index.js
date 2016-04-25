import { createStore } from 'redux';
import formReducer from '../reducers/index';

export default function fromStore(initState) {
  return createStore(formReducer, initState);
}
