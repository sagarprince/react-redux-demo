import * as actions from './actions';
import { ProductsState } from '../../types';

const defaultState: ProductsState = {
    entities: [],
    loading: false,
    error: {
        code: '',
        message: ''
    },
    crud: {
        loading: true,
        code: '',
        success: {
            message: ''
        },
        error: {
            code: '',
            message: ''
        }
    }
}

export default (state = defaultState, action: any): ProductsState => {
    switch (action.type) {
        case actions.LOAD_PRODUCTS: {
            return Object.assign({}, state, {
                loading: true
            });
        }

        case actions.LOAD_PRODUCTS_SUCCESS: {
            return Object.assign({}, state, {
                entities: action.payload,
                loading: false
            });
        }

        case actions.LOAD_PRODUCTS_ERROR: {
            return Object.assign({}, state, {
                entities: [],
                loading: false,
                error: action.payload
            });
        }

        case actions.ADD_PRODUCT: {
            return Object.assign({}, state, {
                entities: state.entities.concat(action.payload)
            });
        }

        default: {
            return state;
        }
    }
};