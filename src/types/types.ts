import { IContextProducts } from "../interface/interface";

export type InitialStateType = IContextProducts[];

export type ProductsTypes = {
    items?: IContextProducts[];
};
export type ProductsContextTypes = {
    products?: IContextProducts[];
};