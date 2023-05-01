export interface ICartItem {
    images?: string[] | string;
    category?: ICategory;
    description?: string;
    creationAt?: string;
    updatedAt?: string;
    name?: string;
    title?: string;
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