import { applyMiddleware, createStore,combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import dashboardReducer from '../DashboardComponent/DashboardReducer'

let combinedReducer = combineReducers({
  dashboard:dashboardReducer
});

const middleware = applyMiddleware(thunk, promiseMiddleware, logger);
export const store = createStore(combinedReducer,middleware);