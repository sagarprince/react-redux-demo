export const LOAD_PRODUCTS = '[PRODUCTS] LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = '[PRODUCTS] LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_ERROR = '[PRODUCTS] LOAD_PRODUCTS_ERROR';
export const ADD_PRODUCT = '[PRODUCTS] ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = '[PRODUCTS] ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_ERROR = '[PRODUCTS] ADD_PRODUCT_ERROR';

export class ProductsActions {
    loadProducts = () => {
        return {
            type: LOAD_PRODUCTS
        };
    }

    addProduct = (payload: any) => {
        return {
            type: ADD_PRODUCT,
            payload: payload
        };
    }
};

