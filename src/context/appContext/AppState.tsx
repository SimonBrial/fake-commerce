import { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import { ADD_PRODUCT, CART, FETCH_DATA } from "../actions";
import { initialState } from "../initialState";
import {
    IContextProducts,
    IContextProps,
    IResponseAPI,
} from "../../interface/interface";

const AppState: React.FC<IContextProps> = (props) => {
    const initialStateReducer = {
        products: [] as IContextProps[],
        cart: initialState,
    };

    const [state, dispatch] = useReducer(AppReducer, initialStateReducer);

    // Endpoint para solicutar todos los productos para luego irlos filtrando por categorias
    //  https://dummyjson.com/products?limit=100&skip=0&select=title,price,discountPercentage,description,thumbnail,category,images,rating,stock,brand

    const fetchProducts = async (url: string) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            //console.log(data.products);
            dispatch({
                type: FETCH_DATA,
                payload: data.products,
            });
        } catch (error) {
            console.log(error);
        }
    }

    function prueba(number: any) {
        return console.log(number)
    }

    const filterProducts = () => {
        console.log('From filter products')
    };

    const addProduct = () => {
        console.log(state);
        dispatch({
            type: ADD_PRODUCT,
            payload: initialState,
        });
    };

    const deleteProduct = () => {
        console.log("Deleting product");
    };

    // Definition of the value's types for provider context
    const contextValues: IContextProps = {
        products: state.products,
        cart: state.cart,
        filterProducts,
        fetchProducts,
        deleteProduct,
        addProduct,
        prueba,
    };

    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppState;
