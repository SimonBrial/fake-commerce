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
    priceFilter: (price: number) => void;
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

type SelectCategoryTypes = {
    category: string[] | undefined,
    currentPage: string
}

type DataLengthTypes = {
    arrayWithoutFilter: IContextProducts[];
    arrayFiltered: IContextProducts[];
};

export type {
    ProductsContextTypes,
    CurrentCategoryHook,
    FilterProductsTypes,
    SelectCategoryTypes,
    SelectedPriceRange,
    InitialStateType,
    CategoryToFilter,
    DataLengthTypes,
    ProductsTypes,
    CategoryArray,
    ArrayToFilter,
    FetchDataHook,
    SelectedPrice,
    BtnFilterType,
    Range,
};
