import React from "react";
import BtnAddCart from "../Buttons/BtnAddCart";
import CounterItems from "../Cart/CounterItems";
import { AiFillDelete } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { IProducts } from "../../interface/interface";

const CartItemPage: React.FC<IProducts> = ({
    description,
    thumbnail,
    price,
    title,
    name,
}): JSX.Element => {
    return (
        <div className="relative flex gap-2 justify-between p-1 border-2 border-gray-300 hover:bg-gradient-to-r from-gray-200 to-white transition-all">
            <div className="flex items-center">
                <img
                    src={thumbnail}
                    alt={description}
                    className="w-28 h-28 p-1"
                />
                <div className=" px-1">
                    <h3 className="text-lg">{title}</h3>
                    <p>{name}</p>
                    <p className="text-gray-400 text-sm">{description}</p>
                    <span className="absolute h-0.5 w-[25rem] z-0 bg-red-500 bottom-2"></span>
                </div>
            </div>
            <span className="absolute top-2 right-2 text-xl text-red-500 p-3 rounded-full hover:bg-red-200 transition-all cursor-pointer">
                <AiFillDelete />
            </span>
            <div className="flex items-end">
                <CounterItems price={price} />
            </div>
        </div>
    );
};

export default CartItemPage;
