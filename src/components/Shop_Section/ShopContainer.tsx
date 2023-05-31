import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { IContextProps, IFilterElement } from "../../interface/interface";
import { Filters } from "../Filter_Section/index";
import { CardContainer } from "./index";
import { AppContext } from "../../context/index";
import {
    useCurrentCategory,
    useFilterCategories,
    useFilter,
} from "../../hooks";

const ShopContainer = () => {
    const allProductsEndpoint = import.meta.env.VITE_URL ;

    const globalContext = useContext(AppContext);
    const { products, filterData, fetchProducts } =
        globalContext as IContextProps;

    const [categoryToFilter, setCategoryToFilter] = useState<string>();
    const { categoriesFilter, section } = useCurrentCategory();
    
    useEffect(() => {
        fetchProducts?.(allProductsEndpoint);
        setCategoryToFilter(undefined);
    }, [section]);

    const { data } = useFilterCategories({
        arrayCategory: categoriesFilter,
        filterArray: products ?? [],
    });

    const paramsHookFilter: IFilterElement = {
        elementArray: data || [],
        categorySelected:
            typeof filterData === "string" ? filterData : categoryToFilter,
    };
    const { productsFilter } = useFilter(paramsHookFilter);

    return (
        <div className="p-2 my-2 border-2 border-gray-200 flex flex-col sm:flex-row items- justify-center">
            <div className="w-full sm:w-1/5 mr-2 mb-2 sm:mb-0">
                <Filters />
            </div>
            <div className="w-full sm:w-4/5">
                <CardContainer products={productsFilter} />
            </div>
        </div>
    );
};

export default ShopContainer;
