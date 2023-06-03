import {
    DECREMENT_PRODUCT_CART,
    INCREMENT_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    FETCH_DATA,
    CLEAR_CART,
    ADD_CART,
    FILTER,
} from "../actions";
import { IContextProducts } from "../../interface/interface";

export default (state: any, action: any) => {
    const { payload, type } = action;
    //console.log(payload)
    //console.log(type)

    switch (type) {
        case FETCH_DATA:
            return {
                ...state,
                products: payload,
            };

        case ADD_CART:
            const inCart = state.cart.some(
                (item: IContextProducts) => item.id === payload.id
            );
            if (!inCart) {
                return {
                    ...state,
                    cart: [...state.cart, payload],
                };
            }

        case DELETE_PRODUCT_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (cartItem: IContextProducts) => cartItem.id !== payload
                ),
            };

        case FILTER:
            return {
                ...state,
                filterData: payload,
            };

        case INCREMENT_PRODUCT_CART:
            state.cart[
                state.cart.findIndex(
                    (item: IContextProducts) => item.id === payload
                )
            ].quantity++;

            return {
                ...state,
                count: [...state.cart],
            };

        case DECREMENT_PRODUCT_CART:
            state.cart[
                state.cart.findIndex(
                    (item: IContextProducts) => item.id === payload
                )
            ].quantity--;

            return {
                ...state,
                count: [...state.cart],
            };
        
        case CLEAR_CART:
                return{
                    ...state,
                    cart: []
                }

        default:
            return state;
    }
};
