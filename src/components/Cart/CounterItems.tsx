import { useState } from "react";
import BtnAddCart from "../Buttons/BtnAddCart";
import { AiFillDelete } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IProducts } from "../../interface/interface";
import { IconBaseProps } from "react-icons";

interface ICounterItems {
    price: number;
}

const CounterItems: React.FC<ICounterItems> = ({ price }): JSX.Element => {
    const [count, setCount] = useState<number>(1);

    const handleIncrement = () => {
        if (count >= 1) {
            return setCount(count + 1);
        } else {
            return setCount(count);
        }
    };
    const handleDecrement = () => {
        if (count > 1) {
            return setCount(count - 1);
        } else {
            return setCount(0);
        }
    };

    const descountValue: number = 0.35;

    const notDescount = (price: number): number => {
        const value: number = count*price
        return Number(value.toFixed(2));
    };

    const priceWithOutDescount = notDescount(price);

    const descount = (price: number, descount: number): number => {
        const formatPrice: number = count*(price * descount);
        return Number(formatPrice.toFixed(2));
    };

    const priceDescount = descount(price, descountValue);

    return (
        <div className="flex mr-5">
            <div className="flex gap-1 flex-col items-center">
                <div className="flex items-center gap-1 border-2 border-gray-200 text-xl">
                    <button className="px-3 py-0.5" onClick={handleDecrement}>
                        -
                    </button>
                    <p className="">{count}</p>
                    <button className="px-3 py-0.5" onClick={handleIncrement}>
                        +
                    </button>
                </div>
                <p className="flex items-center text-sm">
                    <FaDollarSign className="" /> {price} /item
                </p>
            </div>
            <div className="text-2xl px-2 flex flex-col items-center">
                <p className="text-2xl px-2 flex">
                    <FaDollarSign className="" /> {priceDescount}
                </p>
                <p className="text-sm px-2 flex text-gray-400 line-through">
                    <FaDollarSign className="" /> {priceWithOutDescount}
                </p>
            </div>
        </div>
    );
};

export default CounterItems;
