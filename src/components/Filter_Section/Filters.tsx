import { useState, useEffect, useContext } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { BtnFilter } from "../Buttons/index";
import { ByCategory } from "./index";
import { AppContext } from "../../context";
import { useCurrentCategory } from "../../hooks/index";
import { IContextProps } from "../../interface/interface";

const Filters: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { filterProducts } = globalContext as IContextProps;

    const [filterShow, setFilterShow] = useState<boolean>(false);

    const [categoryData, setCategoryData] = useState<string>("");

    const { categoriesFilter, section } = useCurrentCategory();

    const handleFilterShow = () => {
        setFilterShow(!filterShow);
    };

    const handleSubmitData = () => {
        if (filterProducts !== undefined) {
            if (categoryData !== "") {
                filterProducts({
                    categoryData,
                });
            }
        }
    };

    /* useEffect(() => {
        console.log(section)
        console.log(categoriesFilter)
    }, []); */

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
                {categoriesFilter !== null ? (
                    <ByCategory
                        categoryToSelect={categoriesFilter}
                        categorySelectData={setCategoryData}
                    />
                ) : (
                    <p>There are no categories available to filter!</p>
                )}
                <BtnFilter handleSubmit={handleSubmitData} />
            </div>
        </aside>
    );
};

export default Filters;
