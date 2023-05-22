import { useState, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CategoryToFilter } from "../../types/types";

const ByCategory: React.FC<CategoryToFilter> = ({
    categoryToSelect,
    categorySelectData,
}): JSX.Element => {
    const [avelable, setAvelable] = useState<boolean>(false);
    const [categorySelected, setCategorySelected] = useState<string>("");
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
        number | null
    >(null);

    const handleSelectedCategory = (index: number) => {
        if (categoryToSelect.length > 0) {
            setSelectedCategoryIndex(index);
            setCategorySelected(categoryToSelect[index]);
            categorySelectData(categoryToSelect[index]);
        } else {
            setCategorySelected("Don't have category");
        }
    };
    //console.log(categorySelected);

    const handleDropDown = () => {
        setAvelable(!avelable);
    };

    return (
        <section className="mt-2 border-2 border-gray-200 w-full">
            <h2
                onClick={handleDropDown}
                className="bg-gray-200 p-2 text-center flex justify-between items-center cursor-pointer"
            >
                Select a category
                <span
                    className={
                        avelable
                            ? "text-2xl transition duration-200 rotate-180"
                            : "text-2xl transition duration-200 rotate-0"
                    }
                >
                    <MdArrowDropDown />
                </span>
            </h2>
            <div>
                {avelable ? (
                    categoryToSelect.map((category: string, index: number) => {
                        const stylePrice =
                            selectedCategoryIndex === index
                                ? "m-1 cursor-pointer px-2 py-1 text-center bg-gray-200 transition-all"
                                : "m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all";

                        return (
                            <p
                                onClick={() => handleSelectedCategory(index)}
                                className={stylePrice}
                                key={index}
                            >
                                {category.split("-").join(" ")}
                            </p>
                        );
                    })
                ) : (
                    <p className=""></p>
                )}
            </div>
        </section>
    );
};

export default ByCategory;
