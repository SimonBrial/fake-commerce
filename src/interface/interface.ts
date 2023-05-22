import { ReactNode } from "react";
import { Range, FilterProductsTypes } from "../types/types";
interface IProducts {
    description?: string;
    thumbnail?: string;
    category?: string;
    images?: string[];
    rating?: number;
    brand?: string;
    title?: string;
    stock?: number;
    name?: string;
    price?: number;
    id?: number;
}
interface IContextProducts {
    discountPercentage?: number;
    description?: string;
    thumbnail?: string;
    category?: string;
    images?: string[];
    rating?: number;
    stock?: number;
    title?: string;
    brand?: string;
    price?: number;
    id?: number;
}

interface ICategory {
    creationAt?: string;
    updatedAt?: string;
    image?: string;
    name?: string;
    id?: number;
}

interface IContextProps {
    children?: any;
    cart?: IContextProducts[];
    products?: IContextProducts[];
    fetchProducts?: (urlArray: string) => void;
    deleteProduct?: () => void;
    addProduct?: () => void;
    filterProducts?: ({ data }: FilterProductsTypes) => void;
    /* updatePriceRange?: (numberA: any, numberB: any) => any;
    updateSelectedPrice?: (selectedPrice:string) => void;
    updateSelectedCategory?: (selectedCategory: string) => void; */
}

interface IBtnSeeMore {
    description?: string;
    styleIcon?: string;
    styleText?: string;
    styleBtn?: string;
    icon?: ReactNode;
    dir: string;
    handleShow?: () => void;
}
interface IBtnInfoCard {
    description?: string;
    styleIcon?: string;
    styleText?: string;
    styleBtn?: string;
    icon?: ReactNode;
    handleShow?: () => void;
}

interface ICategoryHome {
    iconCategory?: ReactNode;
    description: string;
    titleStyles: string;
    linkStyles?: string;
    iconStyles?: string;
    styles: string;
    img?: string;
    dir: string;
    alt?: string;
}

interface IResponseAPI {
    products: IContextProducts[];
    limit: number;
    total: number;
    skip: number;
}

interface IFilterCategory {
    arrayCategory: string[];
    filterArray: IContextProducts[];
}

interface ICategories {
    [key: string]: string[] | undefined;
    electronics: string[];
    furniture: string[];
    clothes: string[];
    others?: string[];
    shoes: string[];
}

interface IFilterProducts {
    priceData?: string;
    categoryData?: string;
    priceRangeData?: Range;
}

export type {
    IContextProducts,
    IFilterCategory,
    IFilterProducts,
    IContextProps,
    ICategoryHome,
    IBtnInfoCard,
    IResponseAPI,
    IBtnSeeMore,
    ICategories,
    ICategory,
    IProducts,
};
