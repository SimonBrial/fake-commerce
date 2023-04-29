import { MdArrowDropDown } from "react-icons/md";

const ByPriceRange = () => {
    return (
        <form className="border-2 border-gray-200">
            <h1 className="bg-gray-200 p-2 text-center flex justify-between items-center cursor-pointer">
                Select a price range ($)
                <span className="text-2xl">
                    <MdArrowDropDown />
                </span>
            </h1>
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
        </form>
    );
};

export default ByPriceRange;
