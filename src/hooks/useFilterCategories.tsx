import React from "react";
import { IContextProducts, IFilterCategory } from "../interface/interface";

const useFilterCategories = ({
    arrayCategory,
    filterArray,
}: IFilterCategory): { data: IContextProducts[] } => {
    let filteredProducts: IContextProducts[] = [];
    arrayCategory.forEach((category: string) => {
        const equalElements = filterArray.filter(
            (product: IContextProducts) => product.category == category
        );
        return filteredProducts.push(...equalElements);
    });

    return {
        data: filteredProducts,
    };
};

export default useFilterCategories;
