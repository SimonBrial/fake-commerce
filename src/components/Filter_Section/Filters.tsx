import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import BtnFilter from "../Buttons/BtnFilter";
import ByPrice from "./ByPrice";
import ByPriceRange from "./ByPriceRange";
import ByCategory from "./ByCategory";

const Filters: React.FC = (): JSX.Element => {
    const [filterShow, setFilterShow] = useState<boolean>(false);

    const handleFilterShow = () => {
        setFilterShow(!filterShow);
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
            <div className={filterShow ? "block w-full" : "hidden sm:block w-full"}>
                <ByPriceRange />
                <ByCategory />
                <ByPrice />
                <BtnFilter />
            </div>
        </aside>
    );
};

export default Filters;
