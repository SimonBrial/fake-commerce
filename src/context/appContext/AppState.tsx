import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
    INCREMENT_PRODUCT_CART,
    DECREMENT_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    FETCH_DATA,
    ADD_CART,
    FILTER,
} from "../actions";
import {
    IGlobalInitialState,
    IContextProducts,
    IFilterProducts,
    IContextProps,
} from "../../interface/interface";

const AppState: React.FC<IContextProps> = (props) => {
    const initialStateReducer: IGlobalInitialState = {
        products: [],
        count: [],
        cart: [],
    };

    const [state, dispatch] = useReducer(AppReducer, initialStateReducer);

    const fetchProducts = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch({
                type: FETCH_DATA,
                payload: data.products,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const filterProducts = ({
        categoryData,
    }: IFilterProducts) => {
        return dispatch({
            type: FILTER,
            payload: categoryData,
        });
    };

    const addProduct = (cart: IContextProducts) => {
        dispatch({
            type: ADD_CART,
            payload: { ...cart, quantity: 1 },
        });
    };

    const deleteProduct = (id: number) => {
        dispatch({
            type: DELETE_PRODUCT_CART,
            payload: id,
        });
    };

    const counterProductIncrement = (id: number) => {
        dispatch({
            type: INCREMENT_PRODUCT_CART,
            payload: id,
        });
    };

    const counterProductDecrement = (id: number) => {
        dispatch({
            type: DECREMENT_PRODUCT_CART,
            payload: id,
        });
    };

    // Definition of the value's types for provider context
    const contextValues: IContextProps = {
        filterData: state.filterData,
        products: state.products,
        cart: state.cart,
        count: state.count,
        counterProductIncrement,
        counterProductDecrement,
        filterProducts,
        fetchProducts,
        deleteProduct,
        addProduct,
    };

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
