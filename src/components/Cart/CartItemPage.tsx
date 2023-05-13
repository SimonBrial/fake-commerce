import React from "react";
import CounterItems from "../Cart/CounterItems";
import { AiFillDelete } from "react-icons/ai";
import { IProducts } from "../../interface/interface";

const CartItemPage: React.FC<IProducts> = ({
    description,
    thumbnail,
    category,
    price,
    title,
    brand,
    stock,
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
                <div className="px-1">
                    <h2 className="text-lg">{title}</h2>
                    <h3>{name}</h3>
                    <h3 className="text-sm">Brand: {brand}</h3>
                    <h3 className="text-sm">Category: {category}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                    <span className="absolute h-0.5 w-[25rem] bg-red-500 bottom-2"></span>
                </div>
            </div>
            <span className="absolute top-2 right-2 text-xl text-red-500 p-3 rounded-full hover:bg-red-200 hover:text-red-600 transition-all cursor-pointer">
                <AiFillDelete />
            </span>
            <div className="flex items-end">
                {price !== undefined && stock !== undefined ? (
                    <>
                        <CounterItems price={price} stock={stock} />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default CartItemPage;
