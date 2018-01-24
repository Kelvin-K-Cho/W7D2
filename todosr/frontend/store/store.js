import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { middleware } from '../middleware/thunk';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(middleware));
};

export default configureStore;
