import { ReactNode } from 'react';
export interface IProducts {
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
export interface IContextProducts {
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

export interface ICategory {
    creationAt?: string;
    updatedAt?: string;
    image?: string;
    name?: string;
    id?: number;
}

export interface IContextProps {
    children?: any; // TODO: Pending for revision
    cart?: IContextProducts[];
    products?: IContextProducts[];
    addProduct?: () => void;
}

export interface IBtnSeeMore {
    description?: string;
    styleIcon?: string;
    styleText?: string;
    styleBtn?: string;
    icon?: ReactNode;
    dir: string;
    handleShow?: () => void;
}
export interface IBtnInfoCard {
    description?: string;
    styleIcon?: string;
    styleText?: string;
    styleBtn?: string;
    icon?: ReactNode;
    handleShow?: () => void;
}