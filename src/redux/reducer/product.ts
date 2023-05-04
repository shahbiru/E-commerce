import * as type from "../type";

export interface Product {
    date: number;
    id: number;
    productName: string;
    productBrand: string;
    productImg: string;
    productPrice: number;
    category: string;
}

interface ProductState {
    product: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    product: [],
    loading: false,
    error: null,
};

const product = (state = initialState, action: { type: string; payload?: Product }) => {
    switch (action.type) {
        case type.GET_PRODUCTS:
            return {
                ...state,
                product: action.payload,
                loading: true,
            };
        case type.ADD_PRODUCTS:
            return {
                ...state,
                product: [...state.product, action.payload as Product],
                loading: true,
            };
        case type.UPDATE_PRODUCTS:
            const { id } = action.payload as Product;
            return {
                ...state,
                product: state.product.map((contact: any) => {
                    if (contact.id === id) {
                        return {
                            ...contact,
                            // ...product
                        };
                    }
                    return contact;
                })
            };
        default:
            return state;
    }
};

export default product;


