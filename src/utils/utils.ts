import { ICategories } from "../interface/interface";

export function notDiscount(price: number, count: number): number {
    const value: number = count * price;
    return Number(value.toFixed(2));
}

export function discount(
    price: number,
    discount: number,
    count: number
): number {
    const formatPrice: number = count * (price * (1 - discount));
    return Number(formatPrice.toFixed(2));
}

export function stockCount(stock: number, count: number): number {
    return stock - count;
}

export const selectCategory = (categoryPage: string) => {
    // Me va a retornar un string referente a la categoria en la que se encuentre, es decir, segun la direccion obtenida mediante el useLocation, se indicara cual es el arreglo que se usara para hacer la solicitud.

    const categoriesDocs: ICategories[] = [
        {
            clothes: [
                "womens-dresses",
                "mens-shirts",
                "mens-watches",
                "womens-watches",
                "womens-bags",
                "womens-jewellery",
                "tops",
            ],
            electronics: ["smartphones", "laptops"],
            furniture: ["furniture", "home-decoration"],
            shoes: ["womens-shoes", "mens-shoes"],
            others: [],
        },
    ];

    const category = categoriesDocs[0][categoryPage];
    return category || null;
};
