import { useEffect, useContext } from "react";
import { IContextProps } from "../../interface/interface";
import { Filters } from "../Filter_Section/index";
import { CardContainer } from "./index";
import { AppContext } from "../../context/index";
import { useCurrentCategory, useFilterCategories } from "../../hooks";

const ShopContainer = () => {
    const globalContext = useContext(AppContext);
    const { products, fetchProducts } = globalContext as IContextProps;

    const { categoriesFilter, section } = useCurrentCategory();

    const { data } = useFilterCategories({
        filterArray: products ?? [],
        arrayCategory: categoriesFilter,
    });

    //console.log(data)

    useEffect(() => {
        const allProductsEndpoint =
            "https://dummyjson.com/products?limit=100&skip=0&select=title,price,discountPercentage,description,thumbnail,category,images,rating,stock,brand";
        fetchProducts?.(allProductsEndpoint);
    }, [section]);

    return (
        <div className="p-2 my-2 border-2 border-gray-200 flex flex-col sm:flex-row items- justify-center">
            <div className="w-full sm:w-1/5 mr-2 mb-2 sm:mb-0">
                <Filters />
            </div>
            <div className="w-full sm:w-4/5">
                <CardContainer products={data} />
            </div>
        </div>
    );
};

export default ShopContainer;
