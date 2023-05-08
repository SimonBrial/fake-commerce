export interface IProducts {
    description?: string;
    thumbnail?: string;
    images?: string[];
    title?: string;
    name?: string;
    price: number;
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

export interface InitialContext {

}
export interface IContextProps {
    cart?: IContextProducts[];
    products?: IContextProducts[];
    addProduct?: () => void;
}