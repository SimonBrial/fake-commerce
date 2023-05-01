import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const ByPriceRange = () => {
    const [avelableRange, setAvelablePrice] = useState<boolean>(false);

    const handleDropDown = () => {
        setAvelablePrice(!avelableRange);
    };

    return (
        <form className="border-2 border-gray-200">
            <h1
                onClick={handleDropDown}
                className="bg-gray-200 p-2 text-center flex justify-between items-center cursor-pointer"
            >
                Select a price range ($)
                <span
                    className={
                        avelableRange
                            ? "text-2xl transition duration-200 rotate-180"
                            : "text-2xl transition duration-200 rotate-0"
                    }
                >
                    <MdArrowDropDown />
                </span>
            </h1>
            {avelableRange ? (
                <div>
                    <div className="flex items-center my-2 px-2">
                        <label className="mx-2 w-1/3">Max price</label>
                        <input
                            className="p-1 w-2/3 border-2 border-gray-200"
                            type="number"
                            step={50}
                            min={0}
                        />
                    </div>
                    <div className="flex items-center my-2 px-2">
                        <label className="mx-2 w-1/3">Max price</label>
                        <input
                            className="p-1 w-2/3 border-2 border-gray-200"
                            type="number"
                            step={50}
                            min={0}
                        />
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </form>
    );
};

export default ByPriceRange;
