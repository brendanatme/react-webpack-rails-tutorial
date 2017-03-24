//
// store
//
// store for entire UI
// as recommended by React
//
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from './reducers';

// add middlewares here
const middlewares = [
  thunkMiddleware,
  loggerMiddleware // should be dev-only
];

//
// return generator function
// that returns store
// react on rails will take this and provide us with props from rails and railsContext
// for store hydration on page load
//
export default (props, railsContext) => {
  const initialComments = props.comments;
  const { commentsState } = initialStates;
  const initialState = {
    comments: commentsState.merge({
      comments: initialComments,
    }),
    railsContext,
  };

  // https://github.com/reactjs/react-router-redux
  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  // Sync dispatched route actions to the history
  const finalCreateStore = compose(
    applyMiddleware(...middlewares)
  )(createStore);

  return finalCreateStore(reducer, initialState);
};
