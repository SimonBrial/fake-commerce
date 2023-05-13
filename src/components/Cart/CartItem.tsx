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
    brand,
}): JSX.Element => {
    console.log(brand);
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
            <div className="relative w-3/5 px-1 cursor-default leading-4
            ">
                <h3 className="text-lg">{title}</h3>
                <p className="">{brand}</p>
                <p className="w-2/3 flex items-center px-2 text-xl bg-gradient-to-r from-yellow-400 to-white">
                    <span>
                        <FaDollarSign className="text-lg z-10" />
                    </span>
                    {price}
                </p>
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
