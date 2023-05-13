import { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";
import { discount, notDiscount, stockCount } from "../../utils/utils";

interface ICounterItems {
    price: number;
    stock: number;
}

const CounterItems: React.FC<ICounterItems> = ({
    price,
    stock,
}): JSX.Element => {
    const [count, setCount] = useState<number>(1);
    const [incrementAvelable, setIncrementAvelable] = useState<boolean>(true);
    const [decrementAvelable, setDecrementAvelable] = useState<boolean>(true);

    const discountValue: number = 0.35;
    const priceWithOutDiscount: number = notDiscount(price, count);
    const priceDiscount: number = discount(price, discountValue, count);
    const stockAvelable: number = stockCount(stock, count);

    useEffect(() => {
        if (count == stock) {
            setIncrementAvelable(false);
        } else if (count == 1) {
            setDecrementAvelable(false);
        } else if (count > 1 && count < stock) {
            setIncrementAvelable(true);
            setDecrementAvelable(true);
        }
    }, [count]);

    const handleIncrement = () => {
        if (count >= 1 && count < stock) {
            setCount(count + 1);
        } else {
            setCount(count);
        }
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else if (count == 0) {
            setCount(1);
        }
    };

    return (
        <div className="flex justify-between w-[14rem] mr-1">
            <div className="flex gap-1 flex-col items-center">
                <p className="text-sm px-2 flex text-gray-400">
                    Stock: {stockAvelable}
                </p>
                <div className="flex items-center gap-1 border-2 border-gray-200 text-xl">
                    {decrementAvelable ? (
                        <>
                            <button
                                className="m-0.5 px-3  hover:bg-cyan-100 transition-all"
                                onClick={handleDecrement}
                            >
                                -
                            </button>
                        </>
                    ) : (
                        <span className="px-3 py-0.5"></span>
                    )}
                    <p className="px-1">{count}</p>

                    {incrementAvelable ? (
                        <button
                            className="m-0.5 px-3  hover:bg-cyan-100 transition-all"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    ) : (
                        <span className="px-3 py-0.5"></span>
                    )}
                </div>
                <p className="flex items-center text-sm">
                    <FaDollarSign className="" /> {price} /item
                </p>
            </div>
            <div className="text-2xl px-2 flex flex-col items-center justify-end">
                <p className="text-2xl px-2 flex">
                    <FaDollarSign className="" /> {priceDiscount}
                </p>
                <p className="text-sm px-2 flex text-gray-400 line-through">
                    <FaDollarSign className="" /> {priceWithOutDiscount}
                </p>
            </div>
        </div>
    );
};

export default CounterItems;
