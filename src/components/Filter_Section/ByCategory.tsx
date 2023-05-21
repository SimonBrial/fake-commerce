import { useState, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CategoryFilter } from "../../types/types";

const ByCategory: React.FC<CategoryFilter> = ({
    categoryToSelect,
}): JSX.Element => {
    const [avelable, setAvelable] = useState<boolean>(false);
    const [categorySeleted, setCategorySeleted] = useState<string>("");
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
        number | null
    >(null);

    const handleSelectedCategory = (index: number) => {
        if (categoryToSelect.length > 0) {
            setSelectedCategoryIndex(index);
            setCategorySeleted(categoryToSelect[index]);
        } else {
            setCategorySeleted("Don't have category");
        }
    };
    //console.log(categorySeleted);

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
