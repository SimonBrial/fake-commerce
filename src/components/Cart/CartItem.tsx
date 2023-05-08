import React from "react";
import BtnAddCart from "../Buttons/BtnAddCart";
import { TiDelete } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import { IContextProducts } from "../../interface/interface";

const CartItem: React.FC<IContextProducts> = ({
    description,
    images,
    price,
    title,
}): JSX.Element => {
    return (
        <div className="relative flex gap-2 flex-row items-center p-1 border-2 border-gray-300 hover:bg-gradient-to-r from-gray-200 to-white transition-all">
            {Array.isArray(images) ? (
                <img
                    src={images[0]}
                    alt={description}
                    className="w-20 h-20 p-1"
                />
            ) : (
                <div>Image not available</div>
            )}
            <div className=" px-1">
                <h3 className="text-lg">{title}</h3>
                <span className="w-2/5 px-2 flex items-center text-xl bg-gradient-to-r from-yellow-400 to-white">
                    <FaDollarSign className="text-lg" />
                    {price}
                </span>
                <p>{title}</p>
                <span className="absolute h-0.5 w-44 z-0 bg-red-500 bottom-2"></span>
            </div>
            <BtnAddCart
                icon={<TiDelete />}
                styleIcon="text-3xl text-red-500"
                styleBtn="w-10 h-10 absolute right-1 top-7 hover:bg-red-100 transition-all duration-500 flex items-center justify-center rounded-full"
            />
        </div>
    );
};

export default CartItem;
