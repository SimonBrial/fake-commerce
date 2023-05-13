import { createContext } from "react";
import { InitialStateType, ProductsContextTypes } from "../../types/types";
import { IContextProps, IContextProducts } from "../../interface/interface";
import { initialState } from "../initialState";

const AppContext = createContext<InitialStateType | IContextProps | ProductsContextTypes | IContextProducts>(
    initialState
);

export default AppContext;
