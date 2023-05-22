import { useState, useContext } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BtnFilter } from "../Buttons/index";
import { ByPrice, ByPriceRange, ByCategory } from "./index";
import { AppContext } from "../../context";
import { useCurrentCategory } from "../../hooks/index";
import { Range, FilterProductsTypes } from "../../types/types";
import { IContextProps, IFilterProducts } from "../../interface/interface";

const Filters: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { filterProducts } = globalContext as IContextProps;

    const [filterShow, setFilterShow] = useState<boolean>(false);
    const [priceRangeData, setPriceRangeData] = useState<Range | undefined>({
        maxPrice: 0,
        minPrice: 0,
    });
    //const { maxPrice, minPrice } = priceRangeData;
    //console.log("Select a price range ($)", maxPrice, minPrice);

    const [priceData, setPriceData] = useState<string | null>(null);
    //console.log("Select a price ($)", priceData);

    const [categoryData, setCategoryData] = useState<string>("");
    //console.log("Select a category", categoryData);

    const { categoriesFilter } = useCurrentCategory();

    const handleFilterShow = () => {
        setFilterShow(!filterShow);
    };

    const handleSubmitData = () => {
        //event: React.FormEvent
        //event.preventDefault();
        if (filterProducts !== undefined) {
            if (
                priceData !== null &&
                categoryData !== undefined &&
                priceRangeData !== undefined
            ) {
                const paramsToFilter: IFilterProducts = {
                    priceData,
                    categoryData,
                    priceRangeData,
                };

                const data: FilterProductsTypes = {
                    data: paramsToFilter,
                };
                
                filterProducts(data);
            }
        }
    };

    return (
        <aside className="w-full sm:mx-2 p-2 border-2 border-gray-200 flex flex-col items-center justify-between gap-2">
            <div
                className="w-full flex items-center justify-between sm:justify-center text-2xl bg-gray-200 px-2 py-2 sm:text-center cursor-pointer sm:cursor-default"
                onClick={handleFilterShow}
            >
                <h2 className="">Filters</h2>
                <span
                    className={
                        filterShow
                            ? "block sm:hidden text-3xl transition duration-200 rotate-180"
                            : "block sm:hidden text-3xl transition duration-200 rotate-0"
                    }
                >
                    <MdArrowDropDown />
                </span>
            </div>
            <div
                className={
                    filterShow ? "block w-full" : "hidden sm:block w-full"
                }
            >
                <ByPriceRange priceRangeData={setPriceRangeData} />
                {categoriesFilter !== null ? (
                    <ByCategory
                        categoryToSelect={categoriesFilter}
                        categorySelectData={setCategoryData}
                    />
                ) : (
                    <p>There are no categories available to filter!</p>
                )}
                <ByPrice priceData={setPriceData} />
                <BtnFilter handleSubmit={handleSubmitData} />
            </div>
        </aside>
    );
};

export default Filters;
