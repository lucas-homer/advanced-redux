import { combineReducers } from 'redux';
import commentsReducer from './reducer_comments';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
	  comments: commentsReducer,
	  auth: authReducer
});

export default rootReducer;