import * as actions from './actions';
import { PostsState } from '../../types';

const defaultState: any = {
    entities: [],
    loading: false,
    error: {
        code: '',
        message: ''
    },
    crud: {
        loading: false,
        code: '',
        success: null,
        error: null
    }
}

export default (state = defaultState, action: any): PostsState => {
    switch (action.type) {
        case actions.LOAD_POSTS: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case actions.LOAD_POSTS_SUCCESS: {
            return Object.assign({}, state, {
                entities: action.payload,
                loading: false
            });
        }

        case actions.LOAD_POSTS_ERROR: {
            return Object.assign({}, state, {
                entities: [],
                loading: false,
                error: action.payload
            });
        }

        case actions.ADD_POST: {
            return Object.assign({}, state, {
                crud: Object.assign({}, state.crud, {
                    loading: true
                })
            });
        }

        case actions.ADD_POST_SUCCESS: {
            return Object.assign({}, state, {
                entities: state.entities.concat(action.payload),
                crud: Object.assign({}, state.crud, {
                    loading: false,
                    success: {
                        message: 'ADDED SUCCESSFULLY.'
                    }
                })
            });
        }

        case actions.ADD_POST_ERROR: {
            return Object.assign({}, state, {
                crud: Object.assign({}, state.crud, {
                    loading: false,
                    error: action.payload
                })
            });
        }

        default: {
            return state;
        }
    }
};