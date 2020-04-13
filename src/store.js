import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from './loggerMiddleware';
import rootReducer from './reducers';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
}
export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
  ),
);
