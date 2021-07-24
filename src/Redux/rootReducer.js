import { combineReducers } from 'redux';
import monthReducer from './Month/month.reducer';
import postsReducer from './Posts/posts.reducer';

const rootReducer = combineReducers({
    month: monthReducer,
    posts : postsReducer
});

export default rootReducer;