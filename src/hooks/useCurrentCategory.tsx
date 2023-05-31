import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { selectCategory } from "../utils/utils";
import { CurrentCategoryHook, CategoryArray } from "../types/types";

const useCurrentCategory = (): CurrentCategoryHook => {
    const [categoriesFilter, setCategoriesFilter] = useState<CategoryArray>([]);

    const location = useLocation();
    const categoryPage = location.pathname.split("/")[1];

    useEffect(() => {
        const currentCategoryArray = selectCategory(categoryPage)
        if (currentCategoryArray.category !== undefined) {
            setCategoriesFilter(currentCategoryArray.category);
        }
    }, [categoryPage]);

    return {
        categoriesFilter: categoriesFilter,
        section: categoryPage,
    };
};

export default useCurrentCategory;
