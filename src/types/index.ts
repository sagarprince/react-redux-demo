export interface MenuItem {
    title: string;
    path: string;
    icon: string;
}

export interface Success {
    message: string;
}

export interface Error {
    code: any;
    message: string;
}

export interface Product {
    id: any;
    code: any;
    name: string;
    unit: string;
    price: number;
    selected?: boolean;
    quantity?: number;
}

export interface ProductsCrud {
    loading: boolean;
    code: string;
    success: Success;
    error: Error;
}

export interface ProductsState {
    entities: Array<Product>;
    loading: boolean;
    crud: ProductsCrud;
    error: Error;
}

export interface Post {
    id: any;
    title: any;
    body: any;
}

export interface PostCrud {
    loading: boolean;
    code: string;
    success: Success;
    error: Error;
}

export interface PostsState {
    entities: Array<Post>;
    loading: boolean;
    crud: PostCrud;
    error: Error;
}