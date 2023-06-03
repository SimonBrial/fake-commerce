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
    quantity?: number;
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
    filterData?: IContextProducts[];
    products?: IContextProducts[];
    cart?: IContextProducts[];
    children?: any;
    count?: IContextProducts[];
    clearCart?: () => void;
    fetchProducts?: (urlArray: string) => void;
    deleteProduct?: (id: number) => void;
    addProduct?: (product: IContextProducts) => void;
    pruebaCounter?: (
        cartItems: IContextProducts[],
        id: number,
        countPrice: number,
        countItem: number
    ) => void;
    filterProducts?: ({
        categoryData,
    }: IFilterProducts) => void;
    counterProductIncrement?: (id: number) => void;
    counterProductDecrement?: (id: number) => void;
}

interface ICount {
    operator: string;
    price: number;
    id: number;
}

interface IGlobalInitialState {
    products: IContextProducts[];
    cart: IContextProducts[];
    count: IContextProducts[];
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
    categoryData?: string;
}

interface IFilterElement {
    elementArray: IContextProducts[];
    categorySelected?: string;
    currentSection?: string;
}

interface IDiscountValue {
    price: number;
    discount?: number;
    count?: number;
}

interface ICounterItems {
    price: number;
    stock: number;
    id: number;
}

interface ICounter {
    handleDecrement: () => void;
    handleIncrement: () => void;
    decrementAvelable: boolean;
    incrementAvelable: boolean;
    countValue: number;
    price: number;
}

interface IPriceTotalItem {
    priceWithOutDiscount: number;
    priceDiscount: number;
}

interface IBtnAddCart {
    styleIcon: string;
    StyleText?: string;
    styleBtn: string;
    icon: ReactNode;
    text?: string;
    handleAction?: () => void;
}

interface ICarouselProps {
    images: string[];
    width: number;
    height: number;
}

export type {
    IGlobalInitialState,
    IContextProducts,
    IFilterCategory,
    IFilterProducts,
    IPriceTotalItem,
    IFilterElement,
    IDiscountValue,
    ICarouselProps,
    IContextProps,
    ICategoryHome,
    ICounterItems,
    IBtnInfoCard,
    IResponseAPI,
    IBtnSeeMore,
    ICategories,
    IBtnAddCart,
    ICategory,
    IProducts,
    ICounter,
    ICount,
};
