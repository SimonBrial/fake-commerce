import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IContextProducts, IFilterElement } from "../interface/interface";

//type FilteredElementsTypes = IContextProducts[];

const useFilter = ({
    categorySelected,
    currentSection,
    elementArray,
}: IFilterElement): { productsFilter: IContextProducts[] } => {

    /* const [current, setCurrent] = useState<string>("");
    useEffect(() =>{

        if(categorySelected === undefined) {
            setCurrent("")
        } else {
            setCurrent(categorySelected)
        }
    },[currentSection]) */

    if (categorySelected === undefined) {
        return {
            productsFilter: elementArray,
        };
    } else {
        let filterElementByUser: IContextProducts[] = elementArray.filter(
            (elementFromArray: IContextProducts) =>
                elementFromArray.category === categorySelected
        );

        return {
            productsFilter: filterElementByUser,
        };
    }
};
export default useFilter;
