import commentsReducer, { initialState as commentsState } from './commentsReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  comments: commentsReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  commentsState,
  railsContextState,
};
