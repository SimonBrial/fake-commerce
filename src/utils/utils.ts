import {
    ICategories,
    IContextProducts,
    IDiscountValue,
} from "../interface/interface";
import { SelectCategoryTypes, DataLengthTypes } from "../types/types";

function notDiscount({ price, count }: IDiscountValue): number {
    let value: number = 0;
    if (count !== undefined) {
        value = count * price;
    }
    return Number(value.toFixed(2));
}

function discount({ price, discount, count }: IDiscountValue): number {
    let formatPrice: number = 0;
    if (count !== undefined && discount !== undefined) {
        formatPrice = count * (price * (1 - discount));
    }
    return Number(formatPrice.toFixed(2));
}

function stockCount(stock: number, count: number): number {
    return stock - count;
}

const selectCategory = (categoryPage: string): SelectCategoryTypes => {
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
    return {
        category: category || undefined,
        currentPage: categoryPage,
    };
};

function dataLength({
    arrayWithoutFilter,
    arrayFiltered,
}: DataLengthTypes): IContextProducts[] {
    let arrayData: IContextProducts[] = [];
    if (arrayFiltered !== undefined) {
        arrayData = arrayFiltered;
    } else {
        arrayData = arrayWithoutFilter;
    }

    return arrayData;
}

function contructuringProduct({
    description,
    rating,
    images,
    price,
    stock,
    title,
    id,
}: IContextProducts) {
    const productToCart = {
        description,
        rating,
        images,
        price,
        stock,
        title,
        id,
    };
    return productToCart;
}

function totalItems(products: IContextProducts[]): number {
    const sumItems = products.map(
        (item: IContextProducts) => item.quantity || 0
    );

    const itemsReduce = sumItems.reduce((acc, current) => {
        if (current !== undefined && acc !== undefined) {
            return acc + current;
        } else {
            return acc;
        }
    }, 0);
    return itemsReduce;
}

function totalPrice(products: IContextProducts[]): number {
    const totalPrice = products.reduce(
        (acc, currentProduct: IContextProducts) => {
            if (
                currentProduct !== undefined &&
                acc !== undefined &&
                typeof currentProduct.price === "number" &&
                typeof currentProduct.quantity === "number"
            ) {
                const totalToPay: number =
                    acc +
                        parseFloat(currentProduct.price.toString()) *
                            0.65 *
                            currentProduct.quantity || 0;
                return totalToPay;
            } else {
                return acc;
            }
        },
        0
    );

    return parseFloat(totalPrice.toFixed(2));
}

function calcTax(products: IContextProducts[]): number {
    const total = totalPrice(products);
    if (total !== undefined) {
        const totalTax: number = total * 0.025;
        return parseFloat(totalTax.toFixed(2));
    }
    return 0;
}

function calcShipping(products: IContextProducts[]): number {
    const items = totalItems(products);
    if (items !== undefined) {
        const totalShipping = items * 7.5;
        return parseFloat(totalShipping.toFixed(2));
    }
    return 0;
}

function totalToPay(products: IContextProducts[]): number {
    const totalMoney: number = totalPrice(products);
    const totalTax: number = calcTax(products);
    const totalShipping: number = calcShipping(products);

    return parseFloat((totalMoney + totalTax + totalShipping).toFixed(2));
}

export {
    contructuringProduct,
    selectCategory,
    calcShipping,
    notDiscount,
    dataLength,
    stockCount,
    totalPrice,
    totalItems,
    totalToPay,
    discount,
    calcTax,
};
