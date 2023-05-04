import CartItem from "../../components/Cart/CartItem";
import * as type from "../type";

export interface CartItem {
    productId: number;
    name: string;
    brand: string;
    img: string;
    price: number;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
    total: number;
}
interface cartState {
    cart: any | null;
    loading: boolean;
    error: string | null;
}

const initialState: cartState = {
    cart: null,
    loading: false,
    error: null,
};

const cart = (state = initialState, action: { type: string; payload?: Cart }) => {
    switch (action.type) {
        case type.ADD_CART:
            return {
                ...state,
                cart: action.payload as Cart,
                loading: true,
            };
        case type.DELETE_CART:
            return {
                ...state,
                cart: action.payload as Cart,
                loading: true,
            };
        case type.UPDATE_CART:
            return {
                ...state,
                cart: action.payload as Cart,
                loading: true,
            };
        default:
            return state;
    }
};

export default cart;


