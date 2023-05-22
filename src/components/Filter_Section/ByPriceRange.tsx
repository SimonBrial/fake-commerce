import { useState, useRef, useContext, useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { SelectedPriceRange } from "../../types/types";

const ByPriceRange: React.FC<SelectedPriceRange> = ({
    priceRangeData,
}): JSX.Element => {
    const [avelableRange, setAvelablePrice] = useState<boolean>(false);
    /* const globalContext = useContext(AppContext);
    const { updatePriceRange } = globalContext as IContextProps; */

    const maxPriceRef = useRef<HTMLInputElement>(null);
    const minPriceRef = useRef<HTMLInputElement>(null);
    const priceRange = useRef<{ maxPrice: number; minPrice: number }>({
        maxPrice: 0,
        minPrice: 0,
    });

    const handleDropDown = () => {
        setAvelablePrice(!avelableRange);
    };

    const handlePrice = () => {
        const maxPrice = parseInt(maxPriceRef.current?.value || "0", 10);
        const minPrice = parseInt(minPriceRef.current?.value || "0", 10);
        priceRange.current = { maxPrice, minPrice };
        //console.log(priceRange.current);
        priceRangeData({ maxPrice, minPrice });
    };

    return (
        <form className="border-2 border-gray-200 w-full">
            <h2
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
            </h2>
            {avelableRange ? (
                <div>
                    <div className="flex items-center my-2 px-2">
                        <label className="mx-2 w-1/3">Max price</label>
                        <input
                            className="p-1 w-2/3 border-2 border-gray-200"
                            onChange={handlePrice}
                            ref={maxPriceRef}
                            defaultValue={0}
                            type="number"
                            step={50}
                            min={0}
                        />
                    </div>
                    <div className="flex items-center my-2 px-2">
                        <label className="mx-2 w-1/3">Min price</label>
                        <input
                            className="p-1 w-2/3 border-2 border-gray-200"
                            onChange={handlePrice}
                            ref={minPriceRef}
                            defaultValue={0}
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
