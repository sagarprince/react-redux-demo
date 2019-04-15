export const LOAD_POSTS = '[POSTS] LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = '[POSTS] LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_ERROR = '[POSTS] LOAD_POSTS_ERROR';
export const ADD_POST = '[POSTS] ADD_POST';
export const ADD_POST_SUCCESS = '[POSTS] ADD_POST_SUCCESS';
export const ADD_POST_ERROR = '[POSTS] ADD_POST_ERROR';

// API Call
import { PostsAPI } from './api';

export class PostsActions {
    static loadPosts = () => {
        return {
            type: LOAD_POSTS
        }
    }

    static addPost = () => {
        return {
            type: ADD_POST
        };
    }
};

// Async Action Creators

function shouldFetchPosts(state: any) {
    const postsState = state.posts;
    if (postsState.entities.length === 0) {
        return true
    }
    return false;
}

export function fetchPosts() {
    return function (dispatch: any) {
        dispatch(PostsActions.loadPosts());
        return new PostsAPI().getPosts()
            .then(json => {
                dispatch({ type: LOAD_POSTS_SUCCESS, payload: json });
            }).catch((err) => {
                dispatch({ type: LOAD_POSTS_ERROR, payload: err });
            })
    }
}

export function getPosts() {
    return function (dispatch: any, getState: any) {
        if (shouldFetchPosts(getState())) {
            return dispatch(fetchPosts());
        }
    }
}

export function createPost(payload: any) {
    return function (dispatch: any) {
        dispatch(PostsActions.addPost());
        return new PostsAPI().createPost(payload)
            .then(json => {
                dispatch({ type: ADD_POST_SUCCESS, payload: json });
            }).catch((err) => {
                dispatch({ type: ADD_POST_ERROR, payload: err });
            })
    }
}