import { ADD_PRODUCT, CART, FETCH_DATA } from "../actions";

export default (state:any, action:any) => {
    const { payload, type } = action;
    //console.log(payload)
    //console.log(type)

    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: payload,
            };
        case FETCH_DATA:
            return {
                ...state,
                products: payload,
            };
        case CART:
            return {
                ...state,
                cart: payload,
            };
        default:
            return state;
    }
};