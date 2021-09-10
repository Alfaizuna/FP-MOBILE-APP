import {createStore, combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
