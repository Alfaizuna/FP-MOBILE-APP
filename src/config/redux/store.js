import {createStore, combineReducers} from 'redux';
import AuthReducer from './reducers/AuthReducer';
import OrderReducer from './reducers/OrderReducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Order: OrderReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
