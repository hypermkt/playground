import { createStore } from 'redux';
import reducer from '../reducers/index'

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
