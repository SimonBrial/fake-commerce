import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { ADD_PRODUCT, CART } from "../actions";
import { initialState } from "../initialState";
import { IContextProps } from "../../interface/interface";

const AppState = (props: any) => {
    //const Appcontext = useContext(AppContext);
    const initialStateReducer = {
        products: initialState,
    };

    const [state, dispatch] = useReducer(AppReducer, initialStateReducer);

    const addProduct = () => {
        console.log(state);
        dispatch({
            type: ADD_PRODUCT,
            payload: initialState,
        });
    };

    // Definition of the value's types for provider context
    const contextValues: IContextProps = {
        products: state.products,
        cart: state.cart,
        addProduct,
    };

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
