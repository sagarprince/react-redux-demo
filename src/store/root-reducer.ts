import { combineReducers } from 'redux';
import products from './products/reducer';
import posts from './posts/reducer';

const rootReducer = combineReducers({
    products,
    posts
});

export default rootReducer;