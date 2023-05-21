import { IContextProducts } from "../interface/interface";

type InitialStateType = IContextProducts[];

type ProductsTypes = {
    items?: IContextProducts[];
};
type ProductsContextTypes = {
    products?: IContextProducts[];
};

type CategoryArray = string[];

type CategoryFilter = {
    categoryToSelect: string[];
};

type CurrentCategoryHook = {
    categoriesFilter: CategoryArray;
    section: string;
};

type ArrayToFilter = string[];

type FetchDataHook = {
    arrayToFilter: ArrayToFilter;
    fetchData: (ArrayToFilter: ArrayToFilter) => IContextProducts[];
    location: string;
};

export type {
    InitialStateType,
    ProductsTypes,
    ProductsContextTypes,
    CategoryArray,
    CategoryFilter,
    CurrentCategoryHook,
    ArrayToFilter,
    FetchDataHook,
};
