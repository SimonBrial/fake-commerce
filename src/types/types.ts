import { IContextProducts, IFilterProducts } from "../interface/interface";

type InitialStateType = IContextProducts[];

type ProductsTypes = {
    items?: IContextProducts[];
};
type ProductsContextTypes = {
    products?: IContextProducts[];
};

type CategoryArray = string[];

type CategoryToFilter = {
    categoryToSelect: string[];
    categorySelectData: (category: string) => void;
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

type SelectedPrice = {
    priceData: (price: string) => void;
};
type Range = {
    maxPrice: number;
    minPrice: number;
};

type SelectedPriceRange = {
    priceRangeData: (priceRange: Range) => void;
};

type BtnFilterType = {
    handleSubmit: () => void;
};

type FilterProductsTypes = {
    data: IFilterProducts;
};

export type {
    ProductsContextTypes,
    CurrentCategoryHook,
    FilterProductsTypes,
    SelectedPriceRange,
    InitialStateType,
    CategoryToFilter,
    ProductsTypes,
    CategoryArray,
    ArrayToFilter,
    FetchDataHook,
    SelectedPrice,
    BtnFilterType,
    Range,
};
